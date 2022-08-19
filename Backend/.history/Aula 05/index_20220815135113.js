const pg = require('pg');

const client = new pg.Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'locadora'
});

client.connect();
client.status();
client.end();