// fonte de dados
const dados = [{
    "id": "0",
    "author": "Alejandro Escamilla",
    "width": 5616,
    "height": 3744,
    "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
    "download_url": "https://picsum.photos/id/0/5616/3744"
},
{
    "id": "1",
    "author": "Alejandro Escamilla",
    "width": 5616,
    "height": 3744,
    "url": "https://unsplash.com/photos/LNRyGwIJr5c",
    "download_url": "https://picsum.photos/id/1/5616/3744"
},
{
    "id": "10",
    "author": "Paul Jarvis",
    "width": 2500,
    "height": 1667,
    "url": "https://unsplash.com/photos/6J--NXulQCs",
    "download_url": "https://picsum.photos/id/10/2500/1667"
},
{
    "id": "100",
    "author": "Tina Rataj",
    "width": 2500,
    "height": 1656,
    "url": "https://unsplash.com/photos/pwaaqfoMibI",
    "download_url": "https://picsum.photos/id/100/2500/1656"
},
{
    "id": "1000",
    "author": "Lukas Budimaier",
    "width": 5626,
    "height": 3635,
    "url": "https://unsplash.com/photos/6cY-FvMlmkQ",
    "download_url": "https://picsum.photos/id/1000/5626/3635"
},
{
    "id": "1001",
    "author": "Danielle MacInnes",
    "width": 5616,
    "height": 3744,
    "url": "https://unsplash.com/photos/1DkWWN1dr-s",
    "download_url": "https://picsum.photos/id/1001/5616/3744"
},
{
    "id": "1002",
    "author": "NASA",
    "width": 4312,
    "height": 2868,
    "url": "https://unsplash.com/photos/6-jTZysYY_U",
    "download_url": "https://picsum.photos/id/1002/4312/2868"
},
{
    "id": "1003",
    "author": "E+N Photographies",
    "width": 1181,
    "height": 1772,
    "url": "https://unsplash.com/photos/GYumuBnTqKc",
    "download_url": "https://picsum.photos/id/1003/1181/1772"
},
{
    "id": "1004",
    "author": "Greg Rakozy",
    "width": 5616,
    "height": 3744,
    "url": "https://unsplash.com/photos/SSxIGsySh8o",
    "download_url": "https://picsum.photos/id/1004/5616/3744"
},
{
    "id": "1005",
    "author": "Matthew Wiebe",
    "width": 5760,
    "height": 3840,
    "url": "https://unsplash.com/photos/tBtuxtLvAZs",
    "download_url": "https://picsum.photos/id/1005/5760/3840"
}];

let list = document.querySelector('.list');
let table = document.querySelector('.table');

// TODO resposta Tarefa 1 usando p

dados.forEach((dado) => {
    let newElement = document.createElement('p');
    newElement.innerHTML = `ID: ${dado.id} | Author: ${dado.author} | Width: ${dado.width} | Height: ${dado.height} | URL: ${dado.url} | Download: ${dado.download_url}`;
    list.appendChild(newElement);
})

// TODO resposta Tarefa 2 usando Table

let newElementHead = document.createElement('tr');
newElementHead.innerHTML = `
<th class="tableItem">ID</th>
<th class="tableItem">Author</th>
<th class="tableItem">Width</th>
<th class="tableItem">Height</th>
<th class="tableItem">URL</th>
<th class="tableItem">Download</th>
`
table.appendChild(newElementHead);

dados.forEach((dado) => {

    let newElement = document.createElement('tr');
    newElement.innerHTML = `
    <td class="tableItem">${dado.id}</td>
    <td class="tableItem">${dado.author} </td>
    <td class="tableItem">${dado.width}</td>
    <td class="tableItem">${dado.height}</td>
    <td class="tableItem">${dado.url}</td>
    <td class="tableItem">${dado.download_url}</td>
    `
    table.appendChild(newElement);
});

let itens = document.querySelectorAll('.tableItem');

itens.forEach((item) => {
    item.style.border = '1px solid black';
    item.style.padding = '5px 25px';
});