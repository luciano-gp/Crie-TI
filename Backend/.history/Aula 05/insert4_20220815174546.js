const client = require('./database.js');
const dbQuery = require('./dbQuery.js');

client.connect();

async function main() {
    let produtos = [{
        nome: 'Bola Dente de Leite',
        valor: 5.00
    },
    {
        nome: 'Bola Gato',
        valor: 200.00
    }];

    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i];
        let colunas = Object.keys(produto).join(',');
        let valores = Object.values(produto).join(',');
        let dolares = [];

        for (let j = 0; j < produto.length; j++) {
            dolares.push('$' + (j + 1));
        }

        dolares = dolares.join(',');
        let sql = `INSERT INTO produto (${colunas}) VALUES (${dolares});`;
        let resultado = await dbQuery(sql, valores);
    };
}

client.end();

main();