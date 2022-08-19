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

        valores.forEach((valor, index) => {
            dolares.push(`$${index + 1}`);
        });

        dolares = dolares.join(',');
        
    };
    console.log(dolares);
    let sql = `INSERT INTO produto (${colunas}) VALUES (${dolares});`;
    console.log(sql);
    console.log(query);
    await dbQuery(sql, valores.split(','));
}

client.end();

main();