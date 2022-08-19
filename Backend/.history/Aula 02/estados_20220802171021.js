let estados = [];

let estado1 = {};
estado1.sigla = "RS";
estado1.nome = "Rio Grande do Sul";
estado1.populacao = 11290000;
estado1.cidades = [
    {
        codigoIbge : 4314902,
        nome : "Porto Alegre",
        populacao : 1492530
    },
    {
        codigoIbge : 4305108,
        nome : "Caxias do Sul",
        populacao : 517451
    },
    {
        codigoIbge : 4314902,
        nome : "Lajeado",
        populacao : 4311403
    }
];

let cidade1 = {};

let cidade2 = {};

let cidade3 = {};

estado1.cidades.push(cidade1);
estado1.cidades.push(cidade2);
estado1.cidades.push(cidade3);

let estado2 = {};
estado2.sigla = "SC";
estado2.nome = "Santa Catarina";
estado2.populacao = 7165000;
estado2.cidades = [
    {
        codigoIbge : 4205407,
        nome : "Florianópolis",
        populacao : 508826
    },
    {
        codigoIbge : 4204202,
        nome : "Chapecó",
        populacao : 224013
    },
    {
        codigoIbge : 4209102,
        nome : "Joinville",
        populacao : 597658
    }
];

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

estados.push(estado1);
estados.push(estado2);
estados.push(estado3);

console.log(estados);