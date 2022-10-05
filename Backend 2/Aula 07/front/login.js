const URL = 'http://localhost:3001/'

function getFormData() {
    let form = document.querySelector('form');
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    return data;
}

async function auth() {
    let formData = getFormData();
    let headers = new Headers({
        username: formData.username,
        password: formData.password
    });
    let options = {
        headers: headers,
        method: 'GET',
        cache: 'no-store'
    }
    let url = `${URL}auth/`;
    const response = await fetch(url, options);
    const usuario = await response.json();

    if (usuario != null && usuario.id) {
        alert('Login efetuado com sucesso!');
        localStorage.setItem('logado', JSON.stringify(usuario));
    } else {
        alert('Problemas no login, verifique dados digitados!');
    }
    location.reload();
}

async function verify() {
    let logado = JSON.parse(localStorage.getItem('logado'));
    let headers = new Headers({
        username: logado.email,
        password: logado.senha
    });
    let options = {
        headers: headers,
        method: 'GET',
        cache: 'no-store'
    }
    let url = `${URL}auth/`;
    const response = await fetch(url, options);
    const usuario = await response.json();
    if (usuario) {
        document.body.innerHTML = `Bem vindo ${logado.nome}
                                    <br/><a href='/login.html' onclick='out()'>Sair</a>`;
    }
}

async function out() {
    if (confirm('Confirmar a saída?')) {
        localStorage.removeItem('logado');
    }
}

verify();