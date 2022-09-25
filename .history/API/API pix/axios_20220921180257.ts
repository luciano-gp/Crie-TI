import axios, { Axios } from 'axios';
axios.defaults.baseURL = 'http://177.44.248.30/v1/';

export async function getUsers() {
    const users = await axios.get('users');
    return users;
}

export async function getPix() {
    const pix = await axios.get('pix').then((response) => console.log(pix.data));
    
}

export async function setPix() {
    const pix = await axios.get('pix');
    return pix;
}