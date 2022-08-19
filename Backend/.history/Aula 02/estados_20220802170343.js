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
estado1.cidades.push(cidade2);
estado1.cidades.push(cidade3);

let estado2 = {};
estado2.sigla = "SC";
estado2.nome = "Santa Catarina";
estado2.populacao = 7165000;
estado2.cidades = [];

let cidade4 = {};
cidade4.codigoIbge = 4205407,
cidade4.nome = "Florianópolis",
cidade4.populacao = 508826;

let cidade5 = {};
cidade5.codigoIbge = 4204202,
cidade5.nome = "Chapecó",
cidade5.populacao = 224013;

let cidade6 = {};
cidade6.codigoIbge = 4209102,
cidade6.nome = "Joinville",
cidade6.populacao = 597658;

estado2.cidades.push(cidade4);
estado2.cidades.push(cidade5);
estado2.cidades.push(cidade6);

let estado3 = {};
estado3.sigla = "PR";
estado3.nome = "Paraná";
estado3.populacao = 11080000;
estado3.cidades = [];

let cidade7 = {};
cidade7.codigoIbge = 4106902,
cidade7.nome = "Curitiba",
cidade7.populacao = 1948626;

let cidade8 = {};
cidade8.codigoIbge = 4115200,
cidade8.nome = "Maringá",
cidade8.populacao = 403063;

let cidade9 = {};
cidade9.codigoIbge = 4104808,
cidade9.nome = "Cascável",
cidade9.populacao = 332333;

estado3.cidades.push(cidade7);
estado3.cidades.push(cidade8);
estado3.cidades.push(cidade9);