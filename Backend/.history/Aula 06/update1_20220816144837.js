const dbQuery = require('../Aula 05/dbQuery');

async function main() {
    let atributo = 'nome';
    let tabela = 'produto';
    let novoAtributo = 'BOLA BOLA';
    let sql = `UPDATE ${tabela} SET ${atributo} = '${novoAtributo}' WHERE id = $1`;
    await dbQuery(sql, [13]);
}
main();