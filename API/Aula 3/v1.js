const https = require('https');

const anos = [2022, 2023, 2024, 2025]

let requestsFeitos = 0;

let feriados = [];

anos.forEach(item => {
    https.get(`https://brasilapi.com.br/api/feriados/v1/${item}`, (response) => {

        let data = "";

        response.on('data', buffer => {
            data += buffer;

        });

        response.on('end', () => {

            feriados = feriados.concat(JSON.parse(data));
            requestsFeitos++;

            if (requestsFeitos == anos.length) {
                sort(feriados);
                console.log(mostrarFeriados(feriados));
            }

        })

    });

})


function mostrarFeriados(feriados) {
    let todosFeriados = [];

    feriados.forEach(item => {
        todosFeriados.push({
            nome: item.name,
            data: item.date.split('-').reverse().join('/'),
        });
    });

    return todosFeriados
}

function sort(feriados) {
    feriados.sort((a, b) => {
        if (new Date(a.date) < new Date(b.date)) {
            return -1
        }
        if (new Date(a.date) > new Date(b.date)) {
            return 1
        }
        return 0

    });
}


function formatadaData(data) {
    let dia = data.split("-")[2];
    let mes = data.split("-")[1];
    let ano = data.split("-")[0];
    return dia + "/" + mes + "/" + ano;
}