const { BadRequestError } = require("../expressError");


/** Function to convert JS object to SQL for partial update. 
 * 
 * Accepts JS object with keys and values to be updated.
 * 
 * Returns object with keys:
 * - setCols: string of columns to be updated
 * - values: array of values to be updated
 * 
 * Throws BadRequestError if no data is provided.
*/

function sqlForPartialUpdate(dataToUpdate, jsToSql) {
  const keys = Object.keys(dataToUpdate);
  if (keys.length === 0) throw new BadRequestError("No data");

  // {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
  const cols = keys.map((colName, idx) =>
      `"${jsToSql[colName] || colName}"=$${idx + 1}`,
  );

  return {
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  };
}

module.exports = { sqlForPartialUpdate };
