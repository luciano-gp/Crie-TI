import {Sequelize} from 'sequelize'

export const db = new Sequelize("curso", "postgres", "Drake8486@", {
    dialect: "postgres",
    host: "177.44.248.33",
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

