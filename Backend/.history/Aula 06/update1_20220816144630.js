const dbQuery = require('./dbquery.js');

async function main() {
    let tabela = 'produto';
    let nome = 'BOLA BOLA';
    let sql = `UPDATE ${tabela} SET nome = '${nome}' WHERE id = $1`;
    await dbQuery(sql, [2]);
}
main();