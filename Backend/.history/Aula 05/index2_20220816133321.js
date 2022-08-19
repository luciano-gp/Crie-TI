const insertInto = require('./insert');
const client = require('./database.js');
const dbQuery = require('./dbQuery.js');

let produtos = [{
    nome: 'AAAAAAAA',
    valor: 2.00
},
{
    nome: 'BBBBBB',
    valor: 2.00
}];

client.connect()
    .then(insertInto('produto', produtos))
    .finally(() => {
        async function main() {
            let resultado = await dbQuery('SELECT * FROM produto');
            console.table(resultado);
            client.end()
        }
        main();
    });