const dbQuery = require('../Aula 05/dbQuery.js');

async function dbUpdate(tabela, dados, id) {

    if (typeof dados == 'undefined') {
        return;
    }

    let colunas = Object.keys(dados);
    console.log(colunas);
    let valores = Object.values(dados);
    console.log(valores);

    // let dolares = [];
    // for (let j = 0; j < valores.length; j++) {
    //     dolares.push(`$${j + 1}`);
    // }

    let atributos = [];
    for (let j = 0; j < colunas.length; j++) {
        if (typeof valores[j] == 'string') {
            atributos.push(`${colunas[j]} = '${valores[j]}'`);
        } else {
            atributos.push(`${colunas[j]} = ${valores[j]}`);
        }
    }
    atributos = atributos.join(',');
    console.log(atributos);

    let sql = `UPDATE ${tabela} SET $1 WHERE id = ${id}`;
    await dbQuery(sql, [atributos]);
};

dbUpdate();

module.exports = dbUpdate;