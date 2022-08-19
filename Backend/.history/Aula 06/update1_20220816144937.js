const dbQuery = require('../Aula 05/dbQuery.js');
const client = require('../Aula 05/database.js');

async function main() {
    let atributo = 'nome';
    let tabela = 'produto';
    let novoAtributo = 'BOLA BOLA';
    let sql = `UPDATE ${tabela} SET ${atributo} = '${novoAtributo}' WHERE id = $1`;
    await dbQuery(sql, [13]);
}
main();