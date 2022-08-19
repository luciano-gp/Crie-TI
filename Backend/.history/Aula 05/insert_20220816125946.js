function insertInto(tabela, dados) {

    const client = require('./database.js');
    const dbQuery = require('./dbQuery.js');

    client.connect();

    async function main() {

        for (let i = 0; i < dados.length; i++) {
            let dado = dados[i];
            let colunas = Object.keys(dado).join(',');
            let valores = Object.values(dado);
            let dolares = [];

            for (let j = 0; j < dados.length; j++) {
                dolares.push(`$${j + 1}`);
            }

            let query = dolares.join(',');
            let sql = `INSERT INTO ${tabela} (${colunas}) VALUES (${query});`;
            let resultado = await dbQuery(sql, valores);
        };
        client.end();
        return;
    }

    main();
}

module.exports = insertInto;