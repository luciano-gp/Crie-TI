const dbQuery = require('../Aula 05/dbQuery.js');

async function dbUpdate(tabela, dados) {
    if (typeof dados == 'undefined') return;

    let keys = Object.keys(dados);
    let valores = Object.values(dados);
    let colunas = [];
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        colunas.push(`${key} = $${i + 1}`);
    }
    colunas = colunas.join(',');
    let id = `$${valores.length + 1}`;
    valores.push(dados.id);
    let sql =  `UPDATE ${tabela} SET ${colunas} WHERE id = ${id}`;
    return await dbQuery(sql, valores);

};

dbUpdate();

module.exports = dbUpdate;