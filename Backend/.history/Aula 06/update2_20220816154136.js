const dbQuery = require('../Aula 05/dbQuery.js');
const client = require('../Aula 05/database.js');

client.connect()

let produtos = [{
    nome: 'Bola Oficial',
    valor: 130.00
},
{
    nome: 'Bola Frau',
    valor: 35.00
}];

async function main() {
    for (let i = 0; i < produtos.length; i++) {
        let atributo1 = 'nome';
        let atributo2 = 'valor';
        let tabela = 'produto';
        let sql = `UPDATE ${tabela} SET ${atributo1} = '${produtos[i].nome}', WHERE id = $1`;
        await dbQuery(sql, [14]);
    }
    client.end();
}
main();