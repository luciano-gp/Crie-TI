const fs = require('fs');
const fsPromises = fs.promises;

const FILENAME = './products.json';

class Product {

    static all = () => {
        return new Promise(async (resolve, reject) => {
            resolve(JSON.parse(await fsPromises.readFile(FILENAME, 'utf-8')));
        });
    }

    static find = (id) => {
        return new Promise(async (resolve, reject) => {
            const products = await this.all();
            const product = products.find((product) => product.id === Number(id));
            resolve(product);
        });
    }

    static create = (data) => {
        return new Promise(async (resolve, reject) => {
            const products = await this.all();
            const id = (products.length ? products[products.length - 1].id : 0) + 1;
            data.id = id;
            products.push(data);
            await fsPromises.writeFile(FILENAME, JSON.stringify(products));
            resolve(data);
        });
    }

    static update = (data, id) => {
        return new Promise(async (resolve, reject) => {
            id = Number(id);
            const products = await this.all();
            const index = products.findIndex((product) => product.id === id);
            data.id = id;
            products[index] = data;
            await fsPromises.writeFile(FILENAME, JSON.stringify(products));
            resolve(data);
        });
    }

    static delete = (id) => {
        return new Promise(async (resolve, reject) => {
            const products = await this.all();
            const index = products.findIndex((product) => product.id === Number(id));
            products.splice(index, 1);
            await fsPromises.writeFile(FILENAME, JSON.stringify(products));
            resolve();
        });
    }
}

module.exports = Product;