const express = require('express');
const bp = require('body-parser');
const path = require('path');
const gravar = require('./db/gravar.js');
const app = express();
const PORT = 3000;

app.use(bp.urlencoded({ extended: true }));
app.use('/assets', express.static(`${__dirname}/assets/`));
app.use('/db', express.static(`${__dirname}/db/`));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/form', async (req, res) => {
    let nome = req.body.nome;
    let email = req.body.email;
    let msg = req.body.msg;
    let resultado = {
        nome: nome,
        email: email,
        msg: msg
    }
    
    await gravar(resultado);

    res.redirect('/');
})

app.listen(PORT, () => console.log('Rodando http://localhost:' + PORT));