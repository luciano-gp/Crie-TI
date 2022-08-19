const client = require('./database.js');
const dbQuery = require('./dbQuery.js');

client.connect();

async function main(){
    let produto = {
        nome: 'Bola do Gauchão',
        valor: 100.00
    }

    let sql = `INSERT INTO produto (nome, valor) VALUES ($1, $2);`;
    // console.log(sql);
    let resultado = await dbQuery(sql, [produto.nome, produto.valor]);

    client.end();
}

main();