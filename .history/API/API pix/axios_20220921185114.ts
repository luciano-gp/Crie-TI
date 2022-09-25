import axios, { Axios, responseEncoding } from 'axios';
import { Response } from 'express-serve-static-core';
axios.defaults.baseURL = 'http://177.44.248.30/v1/';

export async function getUsers() {
    const users = await axios.get('users');
    return users;
}

export const getPix = async (req: Request, res: Response) => {
    const pix = await axios.get('pix')
    console.log(pix.data);
    res.json(pix.data);
}

export const setPix = async (req, res) => {
    const pix = await axios.get('pix');
    return pix;
}