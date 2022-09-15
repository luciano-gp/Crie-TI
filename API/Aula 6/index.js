const fs = require('fs');
const http = require('http');
const PORT = 3000;
const FILENAME = 'users.json';

const readUsers = () => {
    return new Promise(async (resolve, reject) => {
        const data = await fs.promises.readFile(FILENAME, 'utf8');
        resolve(JSON.parse(data));
    });
}

const saveUsers = (data) => {
    return new Promise(async (resolve, reject) => {
        const users = await readUsers();
        const id = users[users.length - 1].id + 1;
        data.id = id;
        users.push(data);
        await fs.promises.writeFile(FILENAME, JSON.stringify(users));
        resolve();
    })
}

const updateUsers = (data) => {
    return new Promise(async (resolve, reject) => {
        await fs.promises.writeFile(FILENAME, JSON.stringify(data));
        resolve();
    })
}

const deleteUsers = (id) => {
    return new Promise(async (resolve, reject) => {
        const users = await readUsers();
        const index = users.findIndex(user => user.id === id);
        users.splice(index, 1);
        await fs.promises.writeFile(FILENAME, JSON.stringify(users));
        resolve();
    });
}

const openServer = (data) => {
    http.createServer((request, response) => {

        let payload = '';
        request.on('data', (buffer) => payload += buffer);
        request.on('end', async () => {

            payload = JSON.parse(payload);

            const url = request.url;
            const method = request.method;
            const segments = url.split('/').filter((segment) => segment);//Boolean(segment);

            let status = 200;
            let user = {};

            if (method === 'POST' && url ==='/users') {
                data = await saveUsers(payload);
            }

            if (method === 'DELETE' && segments[0] === 'users' && segments.length === 2) {
                data = await deleteUsers(parseInt(segments[1]));
            }

            if (method === 'PUT' && segments[0] === 'users' && segments.length === 2) {
                data = await readUsers();
                const id = parseInt(segments[1]);
                const index = await data.findIndex(user => user.id === id);
                data[index] = payload;
                data[index].id = id;
                await updateUsers(data);
            }

            if (method === 'GET') {
                data = await readUsers();
                if (url === '/') {
                    user = { message: 'Olá Mundo!' };
                } else if (segments[0] === 'users' && segments.length === 2) {
                    const id = parseInt(segments[1]);
                    if (isNaN(id) || id < 1 || id > data.length) {
                        status = 404;
                        user = { Error: 'Recurso não encontrado' }
                    } else {
                        user = { User: data.find(user => user.id === id)};
                    }
                } else if (segments[0] === 'users' && segments.length === 1) {
                    user = data;
                } else {
                    status = 404;
                    user = { message: 'Página não encontrada' };
                }
            }

            response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
            response.write(JSON.stringify(user));

            response.end();
        });
    }).listen(PORT, () => console.log(`Server started at http://localhost:${PORT}/`));
}

readUsers()
    .then(openServer);