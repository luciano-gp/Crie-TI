import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize('apis', 'postgres', '0963', {
    dialect: 'postgres',
    host: '177.44.248.49',
    port: 5432
});