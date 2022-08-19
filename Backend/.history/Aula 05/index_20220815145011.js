const client = require('./database.js');

client.connect();

async function main() {
    let resultado = await dbQuery('SELECT * FROM produto');
    console.table(resultado);

    let resultado2 = await dbQuery('SELECT * FROM produto WHERE id = 1');
    console.table(resultado2);

    client.end();
}
main();