const pg = require('pg');

client.connect();
client.query('SELECT * FROM produto')
    .then((result) => {
        const resultado = result.rows;
        console.log(resultado);
    })
    .finally(() => client.end());