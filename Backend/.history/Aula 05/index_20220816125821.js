const insertInto = require('./insert');

let produtos = [{
    nome: 'Bola de Gude',
    valor: 2.00
},
{
    nome: 'Bolita',
    valor: 2.00
}];

insertInto('produtos', produtos)
    .then(() => {
        const client = require('./database.js');
        const dbQuery = require('./dbQuery.js');
        
        client.connect();
        
        async function main() {
            let resultado = await dbQuery('SELECT * FROM produto');
            console.table(resultado);
        
            let id = 1;
            let sql = 'SELECT * FROM produto WHERE id = $1;';
            let resultado2 = await dbQuery(sql, [id]);
            console.table(resultado2);
        
            client.end();
        }
        main();
    })