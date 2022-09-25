const nodemailer = require('nodemailer');
let email_user = 'luciano.pereira1@universo.univates.br';
let email_pass = 'Mjv0963!';
let email_to = 'luciano.gp99@gmail.com';
let email_subject = 'Email enviado pelo nodejs';
let email_content = 'Email de teste';
let email_html = 'Email de <b>teste</b>, usando <i>acentuação e HTML</i>';

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email_user,
        pass: email_pass
    }
});

let mailOptions = {
    from: email_user,
    to: email_to,
    subject: email_subject,
    text: email_content
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Erro ao enviar email: ' + error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
});