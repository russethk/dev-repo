const request = require("supertest");
const jwt = require("jsonwebtoken");

const app = require("../app");
const db = require("../db");

const User = require("../models/user");
const Message = require("../models/message");

describe("Messages Routes Test", function () {
    
      beforeEach(async function () {
     await db.query("DELETE FROM messages");
     await db.query("DELETE FROM users");
     await db.query("ALTER SEQUENCE messages_id_seq RESTART WITH 1");
    
     let u1 = await User.register({
        username: "test1",
        password: "password",
        first_name: "Test1",
        last_name: "Testy1",
        phone: "+14155550000",
     });
     let u2 = await User.register({
        username: "test2",
        password: "password",
        first_name: "Test2",
        last_name: "Testy2",
        phone: "+14155552222",
     });
     let m1 = await Message.create({
        from_username: "test1",
        to_username: "test2",
        body: "u1-to-u2"
     });
     let m2 = await Message.create({
        from_username: "test2",
        to_username: "test1",
        body: "u2-to-u1"
     });
      });
    
      test("can create", async function () {
     let m = await Message.create({
        from_username: "test1",
        to_username: "test2",
        body: "new"
     });
    
     expect(m).toEqual({
        id: expect.any(Number),
        from_username: "test1",
        to_username: "test2",
        body: "new",
        sent_at: expect.any(Date),
     });
      });
    
      test("can mark read", async function () {
     let m = await Message.create({
        from_username: "test1",
        to_username: "test2",
        body: "new"
     });
    
     let response = await request(app)
        .post(`/messages/${m.id}/read`)
        .send({_token: "test2"});
    
     expect(response.body).toEqual({read: expect.any(String)});
      });
    
      test("can get", async function () {
     let response = await request(app)
        .get("/messages")
        .send({_token: "test1"});
    
     expect(response.body).toEqual({
        messages: [
          {
             id: expect.any(Number),
             body: "u2-to-u1",
             sent_at: expect.any(String),
             read_at: null,
             from_user: {
                username: "test2",
                first_name: "Test2",
                last_name: "Testy2",
                phone: "+14155552222",
                },
                to_user: {
                username: "test1",
                first_name: "Test1",
                last_name: "Testy1",
                phone: "+14155550000",
                }
            },
            {
                id: expect.any(Number),
                body: "u1-to-u2",
                sent_at: expect.any(String),
                read_at: null,
                from_user: {
                username: "test1",
                first_name: "Test1",
                last_name: "Testy1",
                phone: "+14155550000",
                },
                to_user: {
                username: "test2",
                first_name: "Test2",
                last_name: "Testy2",
                phone: "+14155552222",
                }
            }
        ]
        });
        });

        test("can get by username", async function () {
            let response = await request(app)
                .get("/messages/from/test1")
                .send({_token: "test1"});
        
            expect(response.body).toEqual({
                messages: [
                    {
                        id: expect.any(Number),
                        body: "u1-to-u2",
                        sent_at: expect.any(String),
                        read_at: null,
                        to_user: {
                            username: "test2",
                            first_name: "Test2",
                            last_name: "Testy2",
                            phone: "+14155552222",
                        }
                    }
                ]
            });
        });

        test("can get by username", async function () {
            let response = await request(app)
                .get("/messages/to/test1")
                .send({_token: "test1"});
        
            expect(response.body).toEqual({
                messages: [
                    {
                        id: expect.any(Number),
                        body: "u2-to-u1",
                        sent_at: expect.any(String),
                        read_at: null,
                        from_user: {
                            username: "test2",
                            first_name: "Test2",
                            last_name: "Testy2",
                            phone: "+14155552222",
                        }
                    }
                ]
            });
        });

});     

afterAll(async function () {
    await db.end();
});
         

        

       
        