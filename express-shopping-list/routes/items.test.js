process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("../app");
let items = require("../fakeDb");

let item = { name: "popsicle", price:145 };

beforeEach(async () => {
    items.push(item)
  });
  
  afterEach(async () => {
    items = []
  });
  // end afterEach

/** GET /items - returns `{items: [item, ...]}` */

describe("GET /items", async function () {
  test("Gets a list of items", async function () {
    const resp = await request(app).get(`/items`);
    const { items } = resp.body;
    expect(resp.statusCode).toBe(200);
    expect(items).toHaveLength(1);
  });
});
// end

/** GET /items/[name] - return data about one item: `{item: item}` */

describe("GET /items/:name", async function () {
    test("Gets a single item", async function () {
        const resp = await request(app).get(`/items/${item.name}`);
        expect(resp.statusCode).toBe(200);
        expect(resp.body).toEqual(item);
    });
    
    test("Responds with 404 if can't find item", async function () {
        const resp = await request(app).get(`/items/0`);
        expect(resp.statusCode).toBe(404);
    });
});
// end


/** POST /items - create item from data; return `{item: item}` */

describe("POST /items", async function () {
    test("Creates a new item", async function () {
        const resp = await request(app)
            .post(`/items`)
            .send({
                name: "Cheerios",
                price: 3.40
            });
        expect(resp.statusCode).toBe(200);
        expect(resp.body.item).toHaveProperty("name");
        expect(resp.body.item).toHaveProperty("price");
        expect(resp.body.item.name).toEqual("Cheerios");
        expect(resp.body.item.price).toEqual(3.40);
    });
});
// end

/** PATCH /items/[name] - update item; return `{item: item}` */

describe("PATCH /items/:name", async function () {
    test("Updates a single item", async function () {
        const resp = await request(app)
            .patch(`/items/${itme.name}`)
            .send({
                name: "New Popsicle"
            });
        expect(resp.statusCode).toBe(200);
        expect(resp.body).toEqual({
            name: "New Popsicle"
        });
    });
    
    test("Responds with 404 if can't find item", async function () {
        const resp = await request(app).patch(`/items/0`);
        expect(resp.statusCode).toBe(404);
    });
});
// end

/** DELETE /items/[name] - delete item,
 *  return `{message: "Item deleted"}` */

describe("DELETE /items/:name", async function () {
    test("Deletes a single a item", async function () {
        const resp = await request(app)
            .delete(`/items/${item.name}`);
        expect(resp.statusCode).toBe(200);
        expect(resp.body).toEqual({ message: "Deleted" });
    });
});
// end