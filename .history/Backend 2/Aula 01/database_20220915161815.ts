import {Client} from 'pg';

export const db : Client = new Client({
    user: 'postgres',
    password: 'Drake8486@',
    host: '177.44.248.33',
    port: 5432,
    database: 'curso'
});



