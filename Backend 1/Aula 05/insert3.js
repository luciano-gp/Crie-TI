const client = require('./database.js');
const dbQuery = require('./dbQuery.js');

client.connect();

async function main() {
    let produtos = [{
        nome: 'Bola da Champions',
        valor: 150.00
    },
    {
        nome: 'Bola da NBA',
        valor: 135.00
    }];

    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i];
        let sql = `INSERT INTO produto (nome, valor) VALUES ($1, $2);`;
        // console.log(sql);
        await dbQuery(sql, [produto.nome, produto.valor]);
    }

    client.end();
}

main();