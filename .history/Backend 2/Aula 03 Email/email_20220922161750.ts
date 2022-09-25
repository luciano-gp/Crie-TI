import * as nodemailer from 'nodemailer';
let email_user: string = 'luciano.pereira1@universo.univates.br';
let email_pass: string = 'Mjv0963!';
let email_to: string = 'yuri.fernandes@universo.univates.br';
let email_subject: string = 'Email enviado pelo nodeTS';
let email_content: string = 'Email de teste';
let email_html: string = 'Email de <b>teste</b>, usando <i>acentuação e HTML</i>';

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
    html: email_html
}

for (let i = 0; i < 35; i++) {
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Erro ao enviar email: ' + error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
});

}