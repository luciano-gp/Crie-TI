const dbQuery = require('../Aula 05/dbQuery.js');

async function dbUpdate(tabela, dados, id) {
    let count = 0;

    dados = {
        nome: 'Bola 01',
        valor: 100.00
    };

    let valores = Object.values(dados);
    let colunas = Object.keys(dados);
    console.log(valores);
    let dolares = [];

    for (let j = 0; j < valores.length; j++) {
        dolares.push(`$${j + 1}`);
    }

    // dolares = dolares.join(',');
    // let sql = `UPDATE ${tabela} SET ${colunas} = '${produtos[i].nome}', ${atributo2} = '${produtos[i].valor}' WHERE id = ${id}`;
    // await dbQuery(sql, valores);
};

dbUpdate();

module.exports = dbUpdate;