const dbQuery = require("./dbQuery");

let sql = [
    'DROP TABLE IF EXISTS produto;',
    `CREATE TABLE "produto" (
        "id" SERIAL,
        "nome" VARCHAR(250) NOT NULL,
        "valor" NUMERIC(10,2) NULL DEFAULT NULL
        );`,
    `COMMENT ON COLUMN "produto"."id" IS 'Código';`,
    `COMMENT ON COLUMN "produto"."nome" IS 'Nome';`,
    `COMMENT ON COLUMN "produto"."valor" IS 'Valor';`,
    `INSERT INTO produto (nome,valor) VALUES('Bola quadrada',89.56) RETURNING id;`,
    `INSERT INTO produto (nome,valor) VALUES('Bola Redonda',15.56) RETURNING id;`
];

async function main(params) {
    let result = dbQuery(params);
    console.log(params);
    console.table(result);
}

await sql.forEach((sql) => main(sql));