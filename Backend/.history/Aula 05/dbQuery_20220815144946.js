const client = require('./database.js');

async function dbQuery(sql) {
    let resultado = await client.query(sql);
    return resultado.rows;
}

module.exports = dbQuery;