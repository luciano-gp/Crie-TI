const client = require('./database.js');
const dbQuery = require("./dbQuery");

let sql = [
    `DROP TABLE IF EXISTS produto;`,
    `CREATE TABLE "produto" (
        "id" SERIAL,
        "nome" VARCHAR(250) NOT NULL,
        "valor" NUMERIC(10,2) NULL DEFAULT NULL
        );`,
        `COMMENT ON COLUMN produto.id IS 'Código';`,
        `COMMENT ON COLUMN produto.nome IS 'Nome';`,
        `COMMENT ON COLUMN produto.valor IS 'Valor';`,
        `INSERT INTO produto (nome,valor) VALUES('Bola Quadrada',89.56) RETURNING id;`,
        `INSERT INTO produto (nome,valor) VALUES('Bola Redonda',15.56) RETURNING id;`,
        `INSERT INTO produto (nome,valor) VALUES('Bola Oval',69.56) RETURNING id;`,
        `INSERT INTO produto (nome,valor) VALUES('Boleta',10.56) RETURNING id;`
];

client.connect();

async function main() {
    sql.forEach((sql) => {
        dbQuery(sql);
        console.log(sql);
    });
    let result = await dbQuery('SELECT * FROM produto;');
    console.table(result);

    client.end();
}

main();