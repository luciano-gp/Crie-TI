const client = require('./database.js');

async function dbQuery(sql, params) {
    try {
        let resultado = await client.query(sql, params);
        // console.log('Comando executado com sucesso');
        return resultado.rows;
    } catch (err) {
        console.log('Comando executado com erro: ' + err.message);
    }
}

module.exports = dbQuery;