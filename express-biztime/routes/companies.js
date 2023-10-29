/** Routes for companies of express-biztime. */

const express = require("express");
const slugify = require("slugify");
const ExpressError = require("../expressError")
const db = require("../db");

const router = express.Router();

/** GET / => list of companies.
 *
 * =>  {companies: [{code, name, descrip}, {code, name, descrip}, ...]}
 *
 * */

router.get('/', async (req, res, next) => {
  try {
    const results = await db.query(`SELECT code, name FROM companies ORDER BY name`);
    return res.json({ "companies": results.rows });
  } catch (e) {
    return next(e);
  }
});

/** GET /[code] => detail on company
 *
 * =>  {company: {code, name, descrip, invoices: [id, ...]}}
 *
 * */
router.get('/:code', async (req, res, next) => {
  try {
    let code = req.params.code;

    const compResults = await db.query('SELECT code, name, description FROM companies WHERE code = $1', 
    [code]);

    const invResults = await db.query('SELECT id FROM invoices WHERE comp_code = $1',
    [code]);
    
    if (compResults.rows.length === 0) {
      throw new ExpressError(`Can't find company with code of ${code}`, 404)
    }

    const company = compResults.rows[0];
    const invoices = invResults.rows;

    company.invoices = invoices.map(inv => inv.id);

    return res.json({ "company": company });

  } catch (e) {
    return next(e);
  }
});

/** POST / => add new company
 *
 * {name, descrip}  =>  {company: {code, name, descrip}}
 *
 * */

router.post('/', async (req, res, next) => {
    try {
        let { name, description } = req.body;
        let code = slugify(name, { lower: true });

        const results = await db.query('INSERT INTO companies (code, name, description) VALUES ($1, $2, $3) RETURNING code, name, description', 
        [code, name, description]);
        return res.status(201).json({ "company": results.rows[0] });
    } catch (e) {
        return next(e);
    }
});

/** PUT /[code] => update company
 *
 * {name, descrip}  =>  {company: {code, name, descrip}}
 *
 * */

router.put('/:code', async (req, res, next) => {
    try {
        let { name, description } = req.body;
        let code = req.params.code;

        const results = await db.query('UPDATE companies SET name=$1, description=$2 WHERE code=$3 RETURNING code, name, description', 
        [name, description, code]);

        if (results.rows.length === 0) {
            throw new ExpressError(`No such company ${code}`, 404)
        } else {
            return res.json({ "company": results.rows[0] });
        }
    } catch (e) {
        return next(e);
    }
});

/** DELETE /[code] => delete company
 *
 * => {status: "added"}
 *
 */

router.delete('/:code', async (req, res, next) => {
    try {
        let code = req.params.code;
        const results = await db.query('DELETE FROM companies WHERE code=$1 RETURNING code', 
        [code]);

        if (results.rows.length === 0) {
            throw new ExpressError(`No such company ${code}`, 404)
        } else {
            return res.json({ "status": "deleted" });
        }
    } catch (e) {
        return next(e);
    }
})

module.exports = router;


