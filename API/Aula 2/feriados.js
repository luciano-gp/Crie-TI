const https = require('https');

let requestResponses = [];
let count = 0;
let feriados = [];

for (let i = 2; i < 6; i++) {

    https.get(`https://brasilapi.com.br/api/feriados/v1/202${i}`, function (response) {

        let data = '';

        response.on('data', function (buffer) {
            data += buffer;
        })

        response.on('end', function () {
            count++;
            requestResponses = requestResponses.concat(JSON.parse(data));

            if (count === 4) {
                requestResponses.sort(function (a, b) {
                    if (a.date < b.date) {
                        return -1;
                    } else if (a.date > b.date) {
                        return 1;
                    } else {
                        return 0;
                    }
                })

                requestResponses.map(function (response) {
                    feriados.push(
                        {nome : response.name,
                        data : converteData(response.date)}
                    );
                })

                console.log(feriados);
            }
        });
    });
}

function converteData(dataAtual) {
    return dataAtual.split('-').reverse().join('/');
}