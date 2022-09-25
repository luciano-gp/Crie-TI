import axios, { Axios, responseEncoding } from 'axios';
import { Response } from 'express-serve-static-core';
axios.defaults.baseURL = 'http://177.44.248.30/v1/';

export class controllerAxios {

    getUsers = async (req, res, next) => {
        const users = await axios.get('users');
        return users;
    }
    
    getPix = async (req, res, next) => {
        const pix = await axios.get('pix')
        console.log(pix.data);
        return(pix.data);
    }
    
    setPix = async (req, res, next) => {
        const pix = await axios.get('pix');
        return pix;
    }

}
