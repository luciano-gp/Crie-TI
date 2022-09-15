const client = require('./database.js');

async function dbQuery(sql, params) {
  let resultado = await client.query(sql, params);

  return resultado.rows;
}

module.exports = dbQuery;
