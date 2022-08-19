const fs = require('fs');
const https = require('https');

const httpsGet = () => {
    return new Promise((resolve, reject) => {
        https.get('https://cat-fact.herokuapp.com/facts', (response) => {
            let data = '';
            response.on('data', (buffer) => data += buffer);
            response.on('end', () => resolve(data));
        }).on('error', (err) => reject(err));
    });
}

const write = (content) => {
    fs.writeFile("cats.json", content, (error) => {
        if (error) {
            throw err;
        }
        console.log("arquivo gravado");
    })
}

httpsGet()
    .then(write)
    .catch((err) => console.log(err));