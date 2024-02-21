"use strict";

/** Routes for jobs. */

const jsonschema = require("jsonschema");

const express = require("express");
const { BadRequestError } = require("../expressError");
const { ensureAdmin } = require("../middleware/auth");
const Pokemon = require("../models/pokemon");
const pokemonNewSchema = require("../schemas/pokemonNew.json");
const pokemonUpdateSchema = require("../schemas/pokemonUpdate.json");

const router = express.Router({ mergeParams: true });


/** POST / { pokemon } => { pokemon }
 *
 * pokemon should be { name, type }
 * Returns { id, name, type }
 * Authorization required: none
 *
 */

router.post("/", async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, pokemonNewSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const pokemon = await Pokemon.create(req.body);
    return res.status(201).json({ pokemon });
  } catch (err) {
    return next(err);
  }
});


/** GET / => { pokemon: [ { id, name, type, img_url }, ... ] }
 *
 * Returns list of all pokemon.
 *
 * Authorization required: admin
 **/

router.get("/", async function (req, res, next) {
  try {
    const pokemon = await Pokemon.findAll();
    return res.json({ pokemon });
  } catch (err) {
    return next(err);
  }
});


/** GET /[id] => { pokemon }
 *
 * Returns { id, name, type}
 *  where type is { id, name, type }
 * Authorization required: none
 */

router.get("/:id", async function (req, res, next) {
  try {
    const pokemon = await Pokemon.get(req.params.id);
    return res.json({ pokemon });
  } catch (err) {
    return next(err);
  }
});


/** PATCH /[id]  { fld1, fld2, ... } => { pokemon }
 *
 * Data can include: { name, type }
 *
 * Returns { id, name, type }
 *
 * Authorization required: admin
 */

router.patch("/:id", async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, pokemonUpdateSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const job = await Pokemon.update(req.params.id, req.body);
    return res.json({ Pokemon });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /[handle]  =>  { deleted: id }
 *
 * Authorization required: admin
 */

router.delete("/:id", ensureAdmin, async function (req, res, next) {
  try {
    await Pokemon.remove(req.params.id);
    return res.json({ deleted: +req.params.id });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
