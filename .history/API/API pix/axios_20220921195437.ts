import axios, { Axios, responseEncoding } from 'axios';
import { Response } from 'express-serve-static-core';
axios.defaults.baseURL = 'http://177.44.248.30/v1/';

export class AxiosController {

    getUsers = async (req, res, next) => {
        const users = await axios.get('users');
        res.json(users.data);
    }
    
    getPix = async (req, res, next) => {
        const pix = await axios.get('pix')
        res.json(pix.data);
    }

    getOnlyPix = async (req, res, next) => {
        const pix = await axios.get(`pix/${req.params.userId}/${req.params.type}`)
        res.json(pix.data);
    }
    
    setPix = async (req, res, next) => {
        const pix = await axios.get('pix');
        return pix;
    }

}
