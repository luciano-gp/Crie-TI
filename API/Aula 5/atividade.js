const fs = require('fs');
const http = require('http');
const PORT = 3000;

//Aqui usei um callback
// const readUsers = () => {
//     return new Promise((resolve, reject) => {
//         fs.readFile('users.json', 'utf8', (err, data) => {
//             if (err) {
//                 return console.log(err);
//             } else {
//                 resolve(JSON.parse(data));
//             }
//         });
//     });
// }

//Aqui usei promise
const readUsers = () => {
    return new Promise(async (resolve, reject) => {
        const data = await fs.promises.readFile('users.json', 'utf8');
        resolve(JSON.parse(data));
    });
}

const openServer = (data) => {
    http.createServer((request, response) => {
        const url = request.url;
        const segments = url.split('/').filter((segment) => segment);//Boolean(segment);
        let status = 200;
        let user = {};

        if (url === '/') {
            user = { message: 'Olá Mundo!' };
        } else if (segments[0] === 'users' && segments.length === 2) {
            const id = parseInt(segments[1]);
            if (isNaN(id) || id < 1 || id > 7) {
                status = 404;
                user = { Error: 'Recurso não encontrado' }
            } else {
                user = { User: data.find(user => user.id === id) };
            }
        } else if (segments[0] === 'users' && segments.length === 1) {
            user = data;
        } else {
            status = 404;
            user = { message: 'Página não encontrada' };
        }

        response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
        response.write(JSON.stringify(user));

        response.end();
    }).listen(PORT, () => console.log(`Server started at http://localhost:${PORT}/`));
}

readUsers()
    .then(openServer);