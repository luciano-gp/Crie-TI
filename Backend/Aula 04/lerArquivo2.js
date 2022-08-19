let fs = require('fs');
async function main() {
    let content = await fs.promises.readFile('conteudo.json', "utf-8");
    console.log(content);
}

main();