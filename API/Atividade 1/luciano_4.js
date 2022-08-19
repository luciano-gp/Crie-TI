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
    fs.writeFile('cats.json', content, (error) => {
        if (error) {
            throw err;
        }
        console.log('arquivo gravado');
    })
}

const read = () => {
    fs.readFile('cats.json', 'utf8', (err, data) => {
        if (err) {
            return console.log(err);
        } else {
            data = JSON.parse(data);
        }

        const object = data.find(element => element.user != 'Luciano')
        object.user = 'Luciano';

        write(JSON.stringify(data));
    });

}

httpsGet()
    .then(write)
    .then(read)
    .catch((err) => console.log(err));