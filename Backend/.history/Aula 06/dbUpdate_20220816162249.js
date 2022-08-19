const dbQuery = require('../Aula 05/dbQuery.js');

async function dbUpdate(tabela, dados, id) {
    console.log(typeof dados);
    // let colunas = Object.keys(dados);
    // let valores = Object.values(dados);
    // let dolares = [];
    // let atributos = [];

    // for (let j = 0; j < valores.length; j++) {
    //     dolares.push(`$${j + 1}`);
    // }

    // for (let j = 0; j < colunas.length; j++) {
    //     atributos.push(`${colunas[j]} = '${valores[j]}'`);
    // }
    // atributos = atributos.join(',');

    // let sql = `UPDATE ${tabela} SET $1 WHERE id = ${id}`;
    // await dbQuery(sql, [atributos]);
};

dbUpdate();

module.exports = dbUpdate;