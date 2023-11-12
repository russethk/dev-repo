const { BadRequestError } = require("../expressError");
const { sqlForPartialUpdate } = require("./sql");


describe("sqlForPartialUpdate", function () {
    test("works: 1 item", function () {
        const result = sqlForPartialUpdate({ f1: "v1" }, { f1: "f_1" });
        expect(result).toEqual({
        setCols: '"f_1"=$1',
        values: ["v1"],
        });
    });
    
    
    test("bad request with no data", function () {
        expect(() => {
        sqlForPartialUpdate({}, {});
        }).toThrowError(BadRequestError);
    });
    });

// Path: helpers/validateInputs.test.js