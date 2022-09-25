import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize('curso', 'postgres', 'postgres', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
});

sequelize.sync();