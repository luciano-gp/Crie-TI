const pg = require('pg');

console.log("conexão");

const client = new pg.Client(
  {
    user: "postgres",
    password: "postgresCrieProf",
    host: "177.44.248.30",
    port: 5432,
    database: "musicas"
  });

client.connect();

module.exports = client;
