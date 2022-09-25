import axios, { Axios } from 'axios';
axios.defaults.baseURL = 'http://177.44.248.30/v1/';

export async function getUsers() {
    let users = await axios.get('users');
    return users;
}