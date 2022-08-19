const dbQuery = require('../Aula 05/dbQuery.js');

async function insertInto(tabela, dados) {

    let colunas = Object.keys(dados).join(',');
    let valores = Object.values(dados);
    let dolares = [];

    for (let j = 0; j < colunas.length; j++) {
        dolares.push(`$${j + 1}`);
    }
    dolares = dolares.join(',');
    let sql = `INSERT INTO ${tabela} (${colunas}) VALUES (${dolares});`;
    await dbQuery(sql, valores);
};

module.exports = insertInto;