const client = require('../Aula 05/database.js');
const dbQuery = require('../Aula 05/dbQuery.js');
const dbUpdate = require('./dbUpdate.js');
const dbDelete = require('./dbDelete.js');

let produto = {
    nome: 'TESTE novo',
    valor: 8.00,
    id: 5
};

client.connect();
dbDelete(produto);

//     .then(dbInsert('produto', produto))
//     .finally(() => {
//         async function main() {
//             let resultado = await dbQuery('SELECT * FROM produto');
//             console.table(resultado);
//             client.end()
//         }
//         main();
//     });

// dbUpdate('produto', produto, 5)
//     .then(() => {
//         async function main() {
//             let resultado = await dbQuery('SELECT * FROM produto');
//             console.table(resultado);
//             client.end()
//         }
//         main();
//     });