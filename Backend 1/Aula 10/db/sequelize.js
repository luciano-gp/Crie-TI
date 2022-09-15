const Sequelize = require('sequelize');
const sequelize = new Sequelize('curso', 'postgres', 'postgres', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
});
async function testDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Success!');
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}
testDatabase();
module.exports = sequelize;