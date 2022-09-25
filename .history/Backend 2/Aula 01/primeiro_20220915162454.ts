import { Client } from 'pg';

const db : Client = new Client({
    user: 'postgres',
    password: 'Drake8486@',
    host: '177.44.248.33',
    port: 5432,
    database: 'curso'
});
db.connect();
db.query('SELECT * FROM produto').then((results : any) => {
    const resultado = results.rows;
    console.table(resultado);

}).finally(() => db.end());

