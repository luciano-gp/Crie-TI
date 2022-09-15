const { Sequelize, Op, QueryTypes } = require('sequelize');
const sequelize = require('./sequelize.js');
const User = require('./user.js');

(async () => {
    let sql = 'SELECT *, (id * 22) as outro FROM "users"';
    const results = await sequelize.query(sql, {type: QueryTypes.SELECT});
    const results2 = await sequelize.query(sql,{
        model: User,
        mapToModel: true,
        type: QueryTypes.SELECT
    });

    console.log(JSON.stringify(results2, null, 2));
    console.log(results2[0].getFullName());
})();
