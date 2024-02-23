"use strict";

const db = require("../db");
const { NotFoundError} = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");


/** Related functions for companies. */

class Pokemon {
  /** Create a pokemon (from data), update db, return new pokemon data.
   *
   * data should be { id, name, type}
   *
   * Returns { id, name, type }
   **/

  static async create(data) {
    const result = await db.query(
          `INSERT INTO pokemon (id, name, type, image_url)
           VALUES ($1, $2, $3, $4)
           RETURNING id, name, type, image_url`,
        [
          data.id,
          data.name,
          data.type,
          data.image_url
        ]);
    let pokemon = result.rows[0];

    return pokemon;
  }

  /** Find all pokemon.
   * 
   * Returns [{ id, name, type }, ...]
   * 
   * */

  static async findAll({ name, type } = {}) {
    let query = `SELECT id,
                        name,
                        type,
                        image_url
                  FROM pokemon`;
    let queryValues = [];

    // For each possible search term, add to whereExpressions and
    // queryValues so we can generate the right SQL

    if (name) {
      queryValues.push(name);
      query += ` WHERE name ILIKE $${queryValues.length}`;
    }

    if (type) {
      queryValues.push(type);
      query += ` WHERE type ILIKE $${queryValues.length}`;
    }

    // Finalize query and return results

    query += " ORDER BY name, type";
    const pokemonRes = await db.query(query, queryValues);
    return pokemonRes.rows;
  }

  /** Given a pokemon id, return data about pokemon.
   *
   * Returns { id, name, type, img }
   * 
   * Throws NotFoundError if not found.
   **/

  static async get(id) {
    const pokemonRes = await db.query(
          `SELECT id,
                  name,
                  type,
                  image_url
           FROM pokemon
           WHERE id = $1`, [id]);

    const pokemon = pokemonRes.rows[0];

    if (!pokemon) throw new NotFoundError(`No pokemon: ${id}`);

    return pokemon;
  }

  /** Update pokedex data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain
   * all the fields; this only changes provided ones.
   *
   * Data can include: { name, type, img }
   *
   * Returns { id, name, type, img}
   *
   * Throws NotFoundError if not found.
   */

  static async update(id, data) {
    const { setCols, values } = sqlForPartialUpdate(
        data,
        {});
    const idVarIdx = "$" + (values.length + 1);

    const querySql = `UPDATE pokemon 
                      SET ${setCols} 
                      WHERE id = ${idVarIdx} 
                      RETURNING id, 
                                name, 
                                type
                                image_url`;
    const result = await db.query(querySql, [...values, id]);
    const pokemon = result.rows[0];

    if (!pokemon) throw new NotFoundError(`No pokemon: ${id}`);

    return pokemon;
  }

  /** Delete given pokemon from database; returns undefined.
   *
   * Throws NotFoundError if pokemon not found.
   **/

  static async remove(id) {
    const result = await db.query(
          `DELETE
           FROM pokemon
           WHERE id = $1
           RETURNING id`, [id]);
    const pokemon = result.rows[0];

    if (!pokemon) throw new NotFoundError(`No pokemon: ${id}`);
  }
}

module.exports = Pokemon;
