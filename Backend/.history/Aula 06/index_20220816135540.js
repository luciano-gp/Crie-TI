const insertInto = require('./dbInsert');
const client = require('../Aula 05/database.js');
const dbQuery = require('../Aula 05/dbQuery.js');

let produto = {
    nome: 'AAAAA',
    valor: 2.00
};

client.connect()
    .then(insertInto('produto', produto))
    .finally(() => {
        async function main() {
            let resultado = await dbQuery('SELECT * FROM produto');
            console.table(resultado);
            await client.end()
        }
        main();
    });