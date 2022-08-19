let produtos = [];

let produto = {};
produto.id = 1;
produto.nome = "Bola Quadrada";
produto.valor = 99.90;
produto.promocao - function (desconto) {
    return (this.valor - desconto);
}