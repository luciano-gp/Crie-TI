const client = require('./database.js');
const dbQuery = require('./dbQuery.js');

async function main(){
    let nome = 'Bola maneira';
    let valor = 122.79;

    let sql = `INSERT INTO produto (nome, valor) VALUES ($1, $2);`;
    console.log(sql);
    let resultado = await dbQuery(sql, [nome, valor]);
    console.log(resultado);

    client.end();
}

main();