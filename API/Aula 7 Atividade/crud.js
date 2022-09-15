const express = require('express');
const fs = require('fs');
const { nextTick } = require('process');
const fsPromises = fs.promises;
const FILENAME = './products.json';
const PORT = 3000;

const getProducts = () => {
    return new Promise(async (resolve, reject) => {
        const dados = await fsPromises.readFile(FILENAME, 'utf-8');
        resolve(JSON.parse(dados));
    });
}

const findProducts = (id) => {
    return new Promise(async (resolve, reject) => {
        const products = await getProducts();
        const product = products.find((product) => product.id === id);
        resolve(product);
    });
}

const createProducts = (data) => {
    return new Promise(async (resolve, reject) => {
        const products = await getProducts();
        const id = products.length == 0 ? 1 : (products[products.length - 1].id + 1);
        data.id = id;
        products.push(data);
        await fsPromises.writeFile(FILENAME, JSON.stringify(products));
        resolve(data);
    });
}

const updateProducts = (data, id) => {
    return new Promise(async (resolve, reject) => {
        const products = await getProducts();
        const index = products.findIndex((product) => product.id === id);
        data.id = id;
        products[index] = data;
        await fsPromises.writeFile(FILENAME, JSON.stringify(products));
        resolve(data);
    });
}

const deleteProducts = (id) => {
    return new Promise(async (resolve, reject) => {
        const products = await getProducts();
        const index = products.findIndex((product) => product.id === id);
        products.splice(index, 1);
        await fsPromises.writeFile(FILENAME, JSON.stringify(products));
        resolve();
    });
}

const validateData = async (data) => {
    const attributes = ['nome', 'marca', 'preco'];
    const product = {};
    for (const attribute of attributes) {
        if (!data[attribute]) {
            throw new Error(`Invalid data: ${attribute}`);
        }
        product[attributes] = data[attribute];
    }

    if (await checkIfNameExists(product.nome)) throw new Error(`Name already exists: ${product.nome}`);
    return product;
}

const checkIfNameExists = async (name) => {
    const products = await getProducts();
    const product = products.find((product) => product.name === name);
    return Boolean(product);
}

const validateId = async (req, res, next) => {
    if (!await findProducts(Number(req.params.productId))) return res.status(404).send('Product not found');
    next();
}

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log('[' + (new Date()) + '] ' + req.method + ' URL: ' + req.url);
    next();
});

app.get('/', (req, res, next) => {
    res.json({ content: 'Hello World' });
});

app.get('/products', async (req, res, next) => {
    const products = await getProducts();
    res.json(products);
});

app.get('/products/:productId',validateId, async (req, res, next) => {
    const product = await findProducts(Number(req.params.productId));
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.post('/products', async (req, res, next) => {
    try {
        const data = validateData(req.body);
        const product = await createProducts(data);
        res.json(product);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

app.put('/products/:productId',validateId, async (req, res, next) => {
    try {
        const data = validateData(req.body);
        const product = await updateProducts(data, Number(req.params.productId));
        res.json(product);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

app.delete('/products/:productId',validateId, async (req, res, next) => {
    await deleteProducts(Number(req.params.productId));
    res.json({});
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}/`);
});