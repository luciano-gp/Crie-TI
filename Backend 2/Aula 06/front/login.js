const URL = 'http://localhost:3001/'

function getFormData() {
    const data = Object.fromEntries(new FormData(document.querySelector('form')));
    return data;
}

function createOption(user, pass) {
    const base64 = btoa(`${user}:${pass}`);
    const headers = new Headers({
        authorization: `Basic ${base64}`
    });
    const options = {
        headers: headers,
        method: 'GET',
        cache: 'no-store'
    }
    return options;
}

async function auth() {
    const formData = getFormData();
    const options = createOption(formData.username, formData.password);
    const usuario = await response.json(fetch(`${URL}auth/`, options));
    if (usuario != null && usuario.id) {
        alert('Login efetuado com sucesso!');
        localStorage.setItem('logado', JSON.stringify(usuario));
    } else {
        alert('Problemas no login, verifique dados digitados!');
    }
    location.reload();
}

async function verify() {
    const logado = JSON.parse(localStorage.getItem('logado'));
    if (logado == null) return;
    const options = createOption(logado.email, logado.senha);
    const usuario = await response.json(fetch(`${URL}auth/`, options));
    if (usuario) document.body.innerHTML = `Bem vindo ${logado.nome}
                                    <br/><a href='/login.html' onclick='out()'>Sair</a>`;
}

async function out() {
    if (confirm('Confirmar a saída?')) localStorage.removeItem('logado');
}

verify();