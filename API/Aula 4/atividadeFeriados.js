const https = require('https');

let feriados = [];
let count = 0;

const httpsGet = () => {
    return new Promise((resolve, reject) => {
        for (let i = 2022; i < 2026; i++) {
            https.get(`https://brasilapi.com.br/api/feriados/v1/${i}`, (response) => {
                let data = '';
                response.on('data', (buffer) => data += buffer);
                response.on('end', () => {
                    count++;
                    feriados = feriados.concat(JSON.parse(data));
                    if (count == 4) resolve(ordena(feriados));
                });
            }).on('error', (err) => reject(err));
        }
    });
}

function ordena(feriados) {
    feriados.sort((a, b) => {
        if (a.date < b.date) {
            return -1;
        } else if (a.date > b.date) {
            return 1;
        } else {
            return 0;
        }
    });
    return feriados;
}

httpsGet()
    .then((feriados) => {
        feriados.forEach((feriado) => {
            console.log(`${feriado.name}: ${feriado.date.split('-').reverse().join('/')}`);
        })
    })
    .catch((err) => console.log(err));