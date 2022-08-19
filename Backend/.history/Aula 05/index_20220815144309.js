const client = require('./database.js');

client.connect();

async function main() {
    let resultado = await client.query('SELECT * FROM produto');
    console.log(resultado.rows);

    let resultado2 = await client.query('SELECT * FROM produto WHERE id = 1');
    console.log(resultado.rows);

    client.end();
}
main();