let estados = [];

let estado1 = {};
estado1.sigla = "RS";
estado1.nome = "Rio Grande do Sul";
estado1.populacao = 11290000;
estado1.cidades = [];

let cidade1 = {};
cidade1.codigoIbge = 4314902,
cidade1.nome = "Porto Alegre",
cidade1.populacao = 1492530;

let cidade2 = {};
cidade2.codigoIbge = 4305108,
cidade2.nome = "Caxias do Sul",
cidade2.populacao = 517451;

let cidade3 = {};
cidade3.codigoIbge = 4314902,
cidade3.nome = "Lajeado",
cidade3.populacao = 4311403;

estado1.cidades.push(cidade1);

console.log(estado1);