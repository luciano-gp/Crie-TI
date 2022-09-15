let fs = require('fs');
async function main() {
    let content = await fs.promises.readFile('conteudo.json', "utf-8");
    console.log(content);
    let produtos = JSON.parse(content);
    console.log(produtos);
}

main();