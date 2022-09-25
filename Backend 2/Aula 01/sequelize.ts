import {Sequelize} from 'sequelize'

export const db = new Sequelize("curso", "postgres", "postgres", {
    dialect: "postgres",
    host: "localhost",
    port: 5432,
})

async function testeDatabase() {
    try {
        await db.authenticate();
        console.log("rodando");
    } catch (error) {
        console.log("Error: " + error);
    }
}

testeDatabase();

