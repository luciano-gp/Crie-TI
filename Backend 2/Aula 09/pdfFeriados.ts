import express, { Express, request, Request, Response } from 'express';
import * as fs from 'fs';
import axios from 'axios';
const pdf = require('html-pdf');

const PORT: number = 3000;
const app: Express = express();

const generatePDF = async (req: Request, res: Response) => {
    const html = `
        <h1>Tabela de Feriados</h1>
        <table border="1" style="width: 100%">
            <tr>
                <th>Feriado</th>
                <th>Data</th>
            </tr>
        ${await axios.get(`https://brasilapi.com.br/api/feriados/v1/${req.params.year}`)
            .then(res => {
                const data = res.data;
                let table: string = '';
                data.map((data: any) => {
                    table += `
                        <tr>
                            <td>${data.name}</td>
                            <td>${data.date}</td>
                        </tr>`
                })
                return table;
            })}
            </table>
    `;

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

const generateCSV = async (req: Request, res: Response) => {
    const csv = `Feriado; Data;
    ${await axios.get(`https://brasilapi.com.br/api/feriados/v1/${req.params.year}`)
        .then(res => {
            const data = res.data;
            let table: string = '';
            data.map((data: any) => {
                table += `${data.name};${data.date}
                `
            })
            return table;
        })
    }`;

    res.header('Content-Type', 'text/csv');
    res.header('Content-Disposition', 'attachment; filename="feriados.csv"');
    res.header('Pragma', 'attachment; no-cache');
    res.header('Expires', '0');

    res.send(csv);
}

const generate = (req: Request, res: Response) => {
    if (req.params.format == 'pdf') generatePDF(req, res);
    if (req.params.format == 'csv') generateCSV(req, res);
}

app.use('/feriados/:year/:format', generate);

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})