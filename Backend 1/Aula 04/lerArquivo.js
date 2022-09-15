let fs = require('fs');
fs.readFile('conteudo.json', (error, conteudo) => {
    if (error) {
        throw error;
    }
    let produtos = JSON.parse(conteudo);
    console.log(produtos);
});