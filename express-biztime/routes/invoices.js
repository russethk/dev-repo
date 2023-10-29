/** Routes for invoices of express-biztime. */

const express = require("express");
const ExpressError = require("../expressError")

const db = require("../db");

const router = express.Router();

/** GET / => list of invoices.
 *
 * =>  {invoices: [{id, comp_code}, ...]}
 *
 * */

router.get('/', async (req, res, next) => {
  try {
    const results = await db.query(
        `SELECT id, comp_code FROM invoices ORDER BY id`);
    return res.json({ "invoices": results.rows });
  } catch (e) {
    return next(e);
  }
});

/** GET /[id] => detail on invoice
 *
 * =>  {invoices: {id,
 *                amt,
 *                paid,
 *                add_date,
 *                paid_date,
 *                company: {code, name, description}}}
 *
 * */

router.get('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        const results = await db.query(`
            SELECT i.id, i.comp_code, i.amt, i.paid, i.add_date, i.paid_date, c.code, c.name, c.description 
            FROM invoices AS i 
            INNER JOIN companies AS c 
            ON (i.comp_code = c.code) 
            WHERE id = $1`, 
            [id]);
        if (results.rows.length === 0) {
        throw new ExpressError(`Can't find invoice with id of ${id}`, 404)
        }

        const data = results.rows[0];
        const invoice = {
            id: data.id,
            company: {
                code: data.comp_code,
                name: data.name,
                description: data.description,
            },
            amt: data.amt,
            paid: data.paid,
            add_date: data.add_date,
            paid_date: data.paid_date,
        };

        return res.json({"invoice": invoice});
                    
    } catch (e) {
        return next(e);
    }
});

/** POST / => add new invoice
 *
 * {comp_code, amt}  =>  {id, comp_code, amt, paid, add_date, paid_date}
 *
 * */


router.post('/', async (req, res, next) => {
    try {
        let { comp_code, amt } = req.body;
        const results = await db.query(
            `INSERT INTO invoices (comp_code, amt) VALUES ($1, $2) 
            RETURNING id, comp_code, amt, paid, add_date, paid_date`, 
            [comp_code, amt]);
        return res.json({ "invoice": results.rows[0] });
    } catch (e) {
        return next(e);
    }
});

/** PUT /[code] => update invoice
 *
 * {amt, paid}  =>  {id, comp_code, amt, paid, add_date, paid_date}
 *
 * If paying unpaid invoice, set paid_date; if marking as unpaid, clear paid_date.
 * */


router.put('/:id', async (req, res, next) => {
    try {
        let { amt, paid } = req.body;
        let id = req.params.id;
        let paidDate = null;

        const currResult = await db.query(
            'SELECT paid FROM invoices WHERE id = $1', [id]);

        if (currResult.rows.length === 0) {
            throw new ExpressError(`No such invoice ${id}`, 404);
        }

        const currPaidDate = currResult.rows[0].paid_date;

        if (!currPaidDate && paid) {
            paidDate = new Date();
        } else if (!paid) {
            paidDate = null
        } else {
            paidDate = currPaidDate;
        }

        const results = await db.query(
            `UPDATE invoices SET amt=$1, paid=$2, paid_date=$3 
            WHERE id=$4 
            RETURNING id, comp_code, amt, paid, add_date, paid_date`, 
            [amt, paid, paidDate, id]);

        return res.json({ "invoice": results.rows[0] });

    } catch (e) {
        return next(e);
    }
});

/** DELETE /[code] => delete invoice
 *
 * => {status: "deleted"}
 *
 */


router.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        const results = await db.query(
            `DELETE FROM invoices 
            WHERE id=$1 RETURNING id`, 
        [id]);

        if (results.rows.length === 0) {
            throw new ExpressError(`No such invoice ${id}`, 404);
        }
        return res.json({ "status": "deleted" });
    } catch (e) {
        return next(e);
    }
});



module.exports = router;


