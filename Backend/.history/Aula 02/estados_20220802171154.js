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
estado3.cidades = [
    {
        codigoIbge : 4106902,
        nome : "Curitiba",
        populacao : 1948626
    },
    {
        codigoIbge : 4115200,
        nome : "Maringá",
        populacao : 403063
    },
    {
        codigoIbge : 4104808,
        nome : "Cascável",
        populacao : 332333
    }
];

estados.push(estado1);
estados.push(estado2);
estados.push(estado3);

console.log(estados);