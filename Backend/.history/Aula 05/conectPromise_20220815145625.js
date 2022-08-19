const client = require('./database.js');

client.connect();

client.query('SELECT * FROM produto')
    .then((result) => {
        const resultado = result.rows;
        console.log(resultado);
    })
    .then(() => {
        client.query('SELECT * FROM produto WHERE id = 1')
        .then((result) => {
            const resultado2 = result.rows;
            console.log(resultado2);
        })
        .finally(() => client.end());
    })