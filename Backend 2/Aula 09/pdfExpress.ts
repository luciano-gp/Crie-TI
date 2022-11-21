import express, { Express, Request, Response } from 'express';
import * as fs from 'fs';
const pdf = require('html-pdf');

const PORT: number = 3000;
const app: Express = express();

const generatePDF = (req: Request, res: Response) => {
    const html = fs.readFileSync('./index.html').toString();

    const options = {
        type: 'pdf',
        format: 'A4',
        orientation: 'portrait',
        childProcessOptions: {
            env: {
                OPENSSL_CONF: '/dev/null'
            }
        }
    }

    pdf.create(html, options).toBuffer((err: Error, buffer: Buffer) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.end(buffer);
    });
}

app.use('/pdf', generatePDF);

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})