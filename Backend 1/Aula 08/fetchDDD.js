async function buscaDDD() {
    let ddd = document.getElementById('ddd').value;
    const urlApi = `https://brasilapi.com.br/api/ddd/v1/${ddd}`;
    const response = await fetch(urlApi);
    const result = await response.json();

    if (result.state != undefined) {
        return result
    } else {
        return 'DDD NÃO ENCONTRADO'
    }
}

function montaTabela(dados) {
    
        let table = document.querySelector('#table');
    
        table.innerHTML = '';

    if (typeof dados === 'string') {
        table.innerHTML = 'DDD NÃO ENCONTRADO';
        table.style.color = 'red';
        return
    }

    let newElementHead = document.createElement('tr');
    newElementHead.innerHTML = `
        <th class="tableItem">Estado</th>
        <th class="tableItem">Cidade</th>
        `
    table.appendChild(newElementHead);

    dados.cities.sort().forEach((dado) => {

        let newElement = document.createElement('tr');
        newElement.innerHTML = `
            <td class="tableItem">${dados.state}</td>
            <td class="tableItem">${dado}</td>
            `
        table.appendChild(newElement);
    });

    let itens = document.querySelectorAll('.tableItem');

    table.style.color = 'black';

    itens.forEach((item) => {
        item.style.border = '1px solid black';
        item.style.padding = '5px 25px';
    });
}

async function exibeTabela() {
    const result = await buscaDDD();
    montaTabela(result);
}