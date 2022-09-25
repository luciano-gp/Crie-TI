import {Client} from 'pg';

export const db : Client = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'curso'
});



