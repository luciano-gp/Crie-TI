const pg = require('pg');

const client = new pg.Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'curso'
});

client.connect();
// client.query('SELECT * FROM produto')
//     .then((result) => {
//         const resultado = result.rows;
//         console.log(resultado);
//     })
//     .finally(() => client.end());

async function main() {
    let resultado = await client.query('SELECT * FROM produto');
    console.log(resultado.rows);
    client.end();
}

main();