import { generatePdf } from 'html-pdf-node';

function generetePdf(){
    const options = { 
        format: 'A4', 
        path: 'meuPDF.pdf' };

    let html = { content: "<h1>PDF maneiro</h1>" };
    
    generatePdf(html, options);
}

generetePdf();