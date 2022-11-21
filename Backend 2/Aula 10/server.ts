import express, { Express, request, Request, response, Response } from 'express';
import fileUpload, { UploadedFile } from 'express-fileupload';

const app: Express = express();
const PORT: number = 3000;

app.use(fileUpload());
app.use('/public', express.static('public'));

app.use('/myfileupload', (req: Request, res: Response) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded');
    }

    let archive: UploadedFile = req.files.file as UploadedFile;
    let limitSize = 2 * 1024 * 1024;
    let fileName: string = `public/${archive.name}`;
    let verifyJPG = archive.name.split('.');

    if (verifyJPG.length > 2 || verifyJPG[1] != 'jpg') {
        return res.status(400).send('Only jpg files are allowed');
    }

    // if (archive.name.indexOf('.jpg') === -1) {
    //     return res.status(400).send('Only jpg files are allowed');
    // }

    if (archive.size > limitSize) {
        return res.status(400).send('Exceeded limit size (2Mb)');
    }

    archive.mv(fileName, (err) => {
        if (err) return res.status(500).send(err);
        res.redirect(fileName);
    });

});

app.listen(PORT, () => {
    console.log('listening on port ' +PORT);
});