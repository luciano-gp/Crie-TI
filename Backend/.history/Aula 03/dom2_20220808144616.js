let links = [];
links.push("https://www.g1.com.br/");
links.push("https://www.mercadolivre.com.br/");
links.push("https://www.netflix.com/");
links.push("https://www.amazon.com.br/");

let body = document.querySelector('body');
//console.log(body)

for (let i = 0; i < links.length; i++) {
    let href = links[i];

    let a = document.createElement('a');
    a.href = href;
    a.innerHTML = href;
    body.appendChild(a);
    body.appendChild(document.createElement('br'));
}