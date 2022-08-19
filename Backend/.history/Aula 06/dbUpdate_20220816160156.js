const dbQuery = require('../Aula 05/dbQuery.js');

async function dbUpdate(tabela, dados, id) {

    for (let j = 0; j < dados.length; j++) {
        dolares.push(`$${j + 1}`);
    }
    let colunas = Object.keys(dados).join(',');
    let valores = Object.values(dados);
    let dolares = [];

    for (let j = 0; j < valores.length; j++) {
        dolares.push(`$${j + 1}`);
    }

    dolares = dolares.join(',');
    let sql = `UPDATE ${tabela} SET ${colunas} = '${produtos[i].nome}', ${atributo2} = '${produtos[i].valor}' WHERE id = ${id}`;
    await dbQuery(sql, valores);
};

module.exports = dbUpdate;