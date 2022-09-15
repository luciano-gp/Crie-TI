const { Sequelize, Op, QueryTypes } = require("sequelize");
const sequelize = require("./sequelize");

async function dbQuery(sql, params) {
    let result = await sequelize.query(sql, {
        bind: params,
        type: QueryTypes.SELECT
    });
    return result;
}
module.exports = dbQuery;