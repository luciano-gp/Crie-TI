const dbUpdate = require('./dbUpdate');
const client = require('../Aula 05/database.js');
const dbQuery = require('../Aula 05/dbQuery.js');

let produto = {
    // nome: 'TESTE UPDATE',
    valor: 8.00
};

// client.connect()
//     .then(dbInsert('produto', produto))
//     .finally(() => {
//         async function main() {
//             let resultado = await dbQuery('SELECT * FROM produto');
//             console.table(resultado);
//             client.end()
//         }
//         main();
//     });

client.connect()

    dbUpdate('produto', produto, 5)
    .then(() => {
        async function main() {
            let resultado = await dbQuery('SELECT * FROM produto');
            console.table(resultado);
            client.end()
        }
        main();
    });