const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');
const Feriado = require('./feriado.js');
const https = require('https');

const httpsGet = () => {
    return new Promise((resolve, reject) => {
        https.get(`https://brasilapi.com.br/api/feriados/v1/2022`, (response) => {
            let data = '';
            response.on('data', (buffer) => data += buffer);
            response.on('end', () => resolve(JSON.parse(data)));
        }).on('error', (err) => reject(err));
    });
};

httpsGet()
    .then((async (feriados) => {
        await Feriado.sync({ force: true });

        feriados.forEach((feriado) => {
            Feriado.create({
                name: feriado.name,
                date: feriado.date
            });
        });
    }));

