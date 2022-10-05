const Sequelize = require('sequelize');

export const sequelize = new Sequelize('apis', 'postgres', '0963', {
    dialect: 'postgres',
    host: '177.44.248.49',
    port: 5432
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

export default sequelize;