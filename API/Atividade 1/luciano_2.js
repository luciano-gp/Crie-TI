const https = require('https');

const httpsGet = () => {
    return new Promise((resolve, reject) => {
        https.get('https://cat-fact.herokuapp.com/facts', (response) => {
            let data = '';
            response.on('data', (buffer) => data += buffer);
            response.on('end', () => resolve(JSON.parse(data)));
        }).on('error', (err) => reject(err));
    });
}

httpsGet()
    .then((apiResponse) => console.log(apiResponse))
    .catch((err) => console.log(err));