let produtos = [];

let produto = {};
produto.id = 1;
produto.nome = "Bola Quadrada";
produto.valor = 99.90;
produto.promocao - function (desconto) {
    return (this.valor - desconto);
}

let produto2 = {};
produto2.id = 2;
produto2.nome = "Espada Guerreira";
produto2.valor = 990.10;

produtos.push(produto);
produtos2.push(produto);