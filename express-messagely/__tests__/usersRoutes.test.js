const request = require("supertest");
const jwt = require("jsonwebtoken");

const app = require("../app");
const db = require("../db");
const User = require("../models/user");

describe("Users Routes Test", function () { 

    beforeEach(async function () {
        await db.query("DELETE FROM messages");
        await db.query("DELETE FROM users");
    
        let u1 = await User.register({
        username: "test1",
        password: "password",
        first_name: "Test1",
        last_name: "Testy1",
        phone: "+14155550000",
        });
});
    
    /** GET /users/:username => {user: user} */

describe("GET /users/:username", function () {
    test("can get user", async function () {
        let response = await request(app)
            .get("/users/test1")
            .send({_token: "test1"});
        expect(response.body).toEqual({
            user: {
            username: "test1",
            first_name: "Test1",
            last_name: "Testy1",
            phone: "+14155550000",
            join_at: expect.any(String),
            last_login_at: expect.any(String),
            }
        });
    });
});

/** GET /:username/to - get messages to user
     * => {messages: [{id,
     *                body,
     *               sent_at,
     *               read_at,
     *              from_user: {username, first_name, last_name, phone}}, ...]}
     * 
     * */

describe("GET /:username/to", function () {
    test("can get messages to user", async function () {
        let response = await request(app)
            .get("/users/test1/to")
            .send({_token: "test1"});
        expect(response.body).toEqual({
            messages: []
        });
    });
});

/** GET /:username/from - get messages from user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 to_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/

describe("GET /:username/from", function () {
    test("can get messages from user", async function () {
        let response = await request(app)
            .get("/users/test1/from")
            .send({_token: "test1"});
        expect(response.body).toEqual({
            messages: []
        });
    });
});


afterAll(async function () {
   await db.end();
});









