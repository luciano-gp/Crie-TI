const fs = require('fs');

let produtos = [];
for (var i = 1; i <= 10; i++) {

    let produto = {};
    produto.id = i;
    produto.name = `Produto ${i}`;
    produto.valor = i * 10;
    produto.promocao = function (desconto) {
        return this.valor - desconto;
    }
    produtos.push(produto);
}
let meuConteudo = JSON.stringify(produtos);

fs.writeFile(`conteudo.json`, meuConteudo, (error) => {
    if (error) {
        throw error;
    }
    console.log('Arquivo gravado com sucesso.');
});