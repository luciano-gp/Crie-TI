let fs = require('fs');
async function main() {
    let content = await fs.promises.readFile('conteudo.json', "utf-8");
    console.log(content);
    let produtos = JSON.parse(content);
    produtos.push({
        id: 11,
        name: 'Produto 11',
        valor: 110,
        promocao: function (desconto) {
            return this.valor - desconto;
        }
    });
    let meuConteudo = JSON.stringify(produtos);
    fs.writeFile(`conteudo.json`, meuConteudo, (error) => {
        if (error) {
            throw error;
        }
        console.log('Arquivo gravado com sucesso.');
    });
}
main();