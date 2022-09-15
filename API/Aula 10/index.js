require('dotenv').config();
const axios = require('axios');

axios.defaults.baseURL = process.env.API_URL;

// axios.get('users').then((response) => {
//     console.log(response.data);
// });

// axios.get('users/3').then((response) => {
//     console.log(response.data);
// });

// axios.post('users', {
//     name: 'Bruno',
//     email: 'bruno@gmail.com',
//     age: 33,
//     sex: 'male'
// }).catch((error) => {
//     console.error(error.response.data);
// });

// axios.put('users/3', {
//     name: 'Magali',
//     email: 'magamaga@gmail.com',
//     age: 28,
//     sex: 'female'
// }).catch((error) => {
//     console.error(error.response.data);
// });

// axios.delete('users/1').then((response) => {
//     console.log(response.data);
// }).catch((error) => {
//     console.error(error.response.data);
// })

async function main() {
    try {
        let users = await axios.get('users');
        console.log(users);

        user = await axios.post('users', {
            name: 'Yuri',
            email: 'yuri@gmail.com',
            age: 23,
            sex: 'male'
        });

        user = await axios.put('users/3', {
            name: 'Mari',
            email: 'mari@gmail.com',
            age: 28,
            sex: 'female'
        });

        await axios.delete('users/1');
    } catch (error) {
        console.log(error.response.data);
    }
}

main();