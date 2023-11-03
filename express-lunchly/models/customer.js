/** Customer for Lunchly */

const db = require("../db");
const Reservation = require("./reservation");

/** Customer of the restaurant. */

class Customer {
  constructor({ id, firstName, lastName, fullName, phone, notes }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.notes = notes;
  }

  /** methods for getting/setting notes (keep as empty string, not NULL) */

  set notes(val) {
    this._notes = val || "";
  }

  get notes() {
    return this._notes;
  }

  /** methods for getting/setting phone #. */

  set phone(val) {
    this._phone = val || null;
  }

  get phone() {
    return this._phone;
  }

  /** find all customers. */

  static async all() {
    const results = await db.query(
      `SELECT id, 
         first_name AS "firstName",  
         last_name AS "lastName", 
         phone, 
         notes
       FROM customers
       ORDER BY last_name, first_name`
    );
    return results.rows.map(c => new Customer(c));
  }

  /** get a customer by ID. */

  static async get(id) {
    const results = await db.query(
      `SELECT id, 
         first_name AS "firstName",  
         last_name AS "lastName", 
         phone, 
         notes 
        FROM customers WHERE id = $1`,
      [id]
    );

    const customer = results.rows[0];

    if (customer === undefined) {
      const err = new Error(`No such customer: ${id}`);
      err.status = 404;
      throw err;
    }

    return new Customer(customer);
  }

  /** property to get full name. */

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  /** get all matching customers based on search term */

  static async searchForCustomer(terms) {
    let response = await db.query(
      `SELECT id, 
          first_name AS "firstName",  
          last_name AS "lastName",
          phone, 
          notes 
        FROM customers WHERE (
          CONCAT(first_name, ' ', last_name) LIKE $1
          OR CONCAT(last_name, ' ', first_name) LIKE $1)` ,
      [`%${terms}%`]
    );
    
    if (response.rowCount === 0) {
      throw new Error("No results")
    }

    return response.rows.map(c => new Customer(c));
  }

  /** get top 10 customers with most reservations */

  static async topTenCustomers() {
    let response = await db.query(
      `SELECT c.id, 
          c.first_name AS "firstName",  
          c.last_name AS "lastName",
          c.phone, 
          c.notes 
        FROM customers AS c
        JOIN reservations AS r
        ON c.id = r.customer_id
        GROUP BY c.id
        ORDER BY COUNT(r.id) DESC
        LIMIT 10`
    );

    return response.rows.map(c => new Customer(c));
  }

  /** get all reservations for this customer. */

  async getReservations() {
    return await Reservation.getReservationsForCustomer(this.id);
  }

  /** save this customer. */

  async save() {
    if (this.id === undefined) {
      const result = await db.query(
        `INSERT INTO customers (first_name, last_name, phone, notes)
             VALUES ($1, $2, $3, $4)
             RETURNING id`,
        [this.firstName, this.lastName, this.phone, this.notes]
      );
      this.id = result.rows[0].id;
    } else {
      await db.query(
        `UPDATE customers SET first_name=$1, last_name=$2, phone=$3, notes=$4
             WHERE id=$5`,
        [this.firstName, this.lastName, this.phone, this.notes, this.id]
      );
    }
  }
}

module.exports = Customer;
