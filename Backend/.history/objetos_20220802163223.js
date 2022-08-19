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

produtos.push(produto);
produtos.push(produto2);

console.log(produtos);