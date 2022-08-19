const dbQuery = require('./dbquery.js');

async function main() {
    let nome = 'BOLA BOLA';
    let sql = `UPDATE produto SET nome = '${nome}' WHERE id = $1`;
    await dbQuery(sql, [2]);
}
main();