async function buscaMusica() {
    const urlApi = "http://177.44.248.30/musicas";
    const response = await fetch(urlApi);
    const result = await response.json();

    console.log(result);
    return result;
}

function montaTabela(dados) {
    let table = document.querySelector('#table');

    table.innerHTML = '';

    let newElementHead = document.createElement('tr');
    newElementHead.innerHTML = `
        <th class="tableItem">Nome</th>
        <th class="tableItem">Artista</th>
        <th class="tableItem">Álbum</th>
        <th class="tableItem">Gênero</th>
        `
    table.appendChild(newElementHead);

    dados.forEach((dado) => {

        let newElement = document.createElement('tr');
        newElement.innerHTML = `
            <td class="tableItem">${dado.nome}</td>
            <td class="tableItem">${dado.artista} </td>
            <td class="tableItem">${dado.album}</td>
            <td class="tableItem">${dado.genero}</td>
            `
        table.appendChild(newElement);
    });

    let itens = document.querySelectorAll('.tableItem');

    itens.forEach((item) => {
        item.style.border = '1px solid black';
        item.style.padding = '5px 25px';
    });
}

async function exibeTabela() {
    const result = await buscaMusica();
    montaTabela(result);
}