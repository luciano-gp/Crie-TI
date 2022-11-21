const pdf = require('html-pdf');

const generatePDF = () => {

    const html = "<h1>Olá! Este é meu PDF gerado a partir de um HTML! :)</h1>";

    const options = {
        type: 'pdf',
        format: 'A4',
        orientation: 'portrait'
    }

    pdf.create(html, {
        childProcessOptions: {
            env: { OPENSSL_CONF: '/dev/null' }
        }
    }).toFile('./meuPDF2.pdf', function (err: any, res: any) {
        if (err) return console.log(err);
        console.log(res);
    });
}

generatePDF();