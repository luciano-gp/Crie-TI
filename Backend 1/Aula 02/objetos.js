let produtos = [];

let produto = {};
produto.id = 1;
produto.nome = "Bola Quadrada";
produto.valor = 99.90;
produto.promocao - function (desconto) {
    return (this.valor - desconto);
}

let tamanhoP = {
    id : 1,
    nome : "P"
};

let tamanhoM = {
    id : 2,
    nome : "M"
};

tamanhoM.descricao = "Um tamanho médio"

let produto2 = {};
produto2.id = 2;
produto2.nome = "Espada Guerreira";
produto2.valor = 990.10;
produto2.tamanhos = [];
produto2.tamanhos.push(tamanhoP);
produto2.tamanhos.push(tamanhoM);

produtos.push(produto);
produtos.push(produto2);

console.log(produtos);

console.log(produtos[1].tamanhos[0].nome);

let resultado = JSON.stringify(produtos);

console.log(resultado);

let novoProduto = JSON.parse(resultado);

console.log(novoProduto);