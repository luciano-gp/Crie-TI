const client = require('./database.js');

client.connect();

client.query('SELECT * FROM produto')
    .then((result) => {
        console.log(result.rows);
    })
    .then(() => {
        client.query('SELECT * FROM produto WHERE id = 1')
        .then((result) => {
            console.log(result.rows);
        })
        .finally(() => client.end());
    })