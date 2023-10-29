// Tell Node that we're in test "mode"

const request = require('supertest');
const app = require('../app');
const { createData } = require("../_test-common");
const db = require('../db');

// before each test, clean out data
beforeEach(createData);

afterAll(async () => {
  await db.end()
})

describe('GET /', () => {
  test('It should respond with array of companies', async () => {
    const response = await request(app).get('/companies');
    expect(response.body).toEqual({
      "companies": [
        {code: "apple", name: "Apple"},
        {code: "ibm", name: "IBM"},
      ]
    });
  })
});

describe('GET /apple', () => {
  test('It returns company info', async () => {
    const response = await request(app).get('/companies/apple');
    expect(response.body).toEqual(
        {
          "company": {
            code: "apple",
            name: "Apple",
            description: "Maker of OSX.",
            invoices: [1, 2],
          }
        }
    );
  });

  test('It should return 404 for no-such-company', async () => {
    const response = await request(app).get('/companies/blarney');
    expect(response.status).toEqual(404);
  })
});

describe('POST /', () => {
  test('It should add company', async () => {
    const response = await request(app)
        .post('/companies')
        .send({name: "TacoTime", description: "Yum!"});

    expect(response.body).toEqual(
        {
          "company": {
            code: "tacotime",
            name: "TacoTime",
            description: "Yum!",
          }
        }
    );
  });

  test('It should return 500 for conflict', async () => {
    const response = await request(app)
        .post('/companies')
        .send({name: "Apple", description: "Yum!"});

    expect(response.status).toEqual(500);
  })
});


describe('PUT /', () => {
  test('It should update company', async () => {
    const response = await request(app)
        .put('/companies/apple')
        .send({name: "Apple2", description: "Apple Extension"});

    expect(response.body).toEqual(
        {
          "company": {
            code: "apple",
            name: "Apple2",
            description: "Apple Extension",
          }
        }
    );
  });


  test('It should return 404 for no-such-company', async () => {
    const response = await request(app)
      .put('/companies/blarney')
      .send({name: "blarney"});

    expect(response.status).toEqual(404);
  });

  test('It should return 500 for missing data', async () => {
    const response = await request(app)
      .post('/companies/apple')
      .send({});

    expect(response.status).toEqual(500);
  })
});

describe('DELETE /', () => {
  test('It should delete company', async () => {
    const response = await request(app)
        .delete('/companies/apple');

    expect(response.body).toEqual({status: "deleted"});
  });

  test('It should return 404 for no-such-company', async () => {
    const response = await request(app)
        .delete('/companies/blarney');

    expect(response.status).toEqual(404);
  });
});


