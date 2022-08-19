let aula3 = document.getElementById('aula-3');

console.log(aula3);
aula3.innerHTML = "<small>Aula 3</small>";
aula3.style.backgroundColor = "red";

let links = document.querySelectorAll("a.link");

for (let i = 0; i < links.length; i++) {
    let a = links[i];
    a.href="https://www.univates.br/";
}

console.log(links);