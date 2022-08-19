const dbQuery = require('./dbQuery.js');

async function insertInto(tabela, dados) {

    for (let i = 0; i < dados.length; i++) {
        let dado = dados[i];
        let colunas = Object.keys(dado).join(',');
        let valores = Object.values(dado);
        let dolares = [];

        for (let j = 0; j < dados.length; j++) {
            dolares.push(`$${j + 1}`);
        }
        console.log(colunas);
        console.log(valores);
        console.log(dolares);
        // let query = dolares.join(',');
        // let sql = `INSERT INTO ${tabela} (${colunas}) VALUES (${query});`;
        // let resultado = await dbQuery(sql, valores);
        // return resultado;
    };
}

module.exports = insertInto;