"use strict";
exports.__esModule = true;
exports.db = void 0;
var pg_1 = require("pg");
exports.db = new pg_1.Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'curso'
});
