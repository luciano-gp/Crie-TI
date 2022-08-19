const insertInto = require('./insert');
const client = require('./database.js');
const dbQuery = require('./dbQuery.js');

let produtos = [{
    nome: 'Teste',
    valor: 2.00
},
{
    nome: 'Teste 1',
    valor: 2.00
}];

client.connect()
    .then(insertInto('produto', produtos))
    .then(() => {
        async function main() {
            let resultado = await dbQuery('SELECT * FROM produto');
            console.table(resultado);
        }
        main();
    })
    .finally(() => client.end());