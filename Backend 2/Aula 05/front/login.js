const URL = 'http://localhost:3000/'
const options = {   //fetch options
    method: 'GET',
    credentials: 'include',
    cache: 'no-store'
}

async function auth() {
    let form = document.querySelector('form');
    let params = new URLSearchParams(new FormData(form)).toString();
    let url = `${URL}auth/?${params}`;

    const response = await fetch(url, options);
    const result = await response.json();

    if (result) {
        alert('Login efetuado com sucesso!');
        location.reload();
    } else {
        alert('Problemas no login, verifique dados digitados!');
    }
}

async function verify() {
    let url = `${URL}verify`;
    const response = await fetch(url, options);
    const result = await response.json();
    if (result.loggedIn) {
        document.body.innerHTML = `Bem vindo ${result.userName}
                                    <br/><a href='/login.html' onclick='out()'>Sair</a>`;
    }
}

async function out() {
    if (confirm('Confirmar a saída?')) {
        let url = `${URL}out`;
        const response = await fetch(url, options);
        await response.json();
        location.reload();
    }
}

verify();