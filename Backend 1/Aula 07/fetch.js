async function buscaFeriado() {
    let ano = document.querySelector('#ano').value;
    const urlApi = `https://brasilapi.com.br/api/feriados/v1/${ano}`;
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
        <th class="tableItem">Data</th>
        <th class="tableItem">Feriado</th>
        <th class="tableItem">Tipo</th>
        `
    table.appendChild(newElementHead);

    dados.forEach((dado) => {

        let newElement = document.createElement('tr');
        newElement.innerHTML = `
            <td class="tableItem">${dado.date.split('-').reverse().join('/')}</td>
            <td class="tableItem">${dado.name} </td>
            <td class="tableItem">${dado.type}</td>
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
    const result = await buscaFeriado();
    montaTabela(result);
}