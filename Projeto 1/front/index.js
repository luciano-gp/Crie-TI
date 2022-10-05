const ENDPOINT = 'http://localhost:3000';

const verifyLogged = () => {
  if (localStorage.getItem('logged')) {
    window.open(`/Projeto 1/front/html/menu.html`, '_self');
  }
}

verifyLogged();

const validateUser = () => {
  const email = document.getElementById("email").value;
  const password = MD5(document.getElementById("password").value);

  axios.post(`${ENDPOINT}/validateUser`, {
    email: email,
    password: password
  }).then((response) => {
    console.log(response);
    if (response.status === 200) {
      const data = response.data;
      if (data > 0) {
        const logged = {
          email: email,
          password: password
        }
        localStorage.setItem('logged', JSON.stringify(logged));
        window.open(`/Projeto 1/front/html/menu.html`, '_self');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email or Password is incorrect',
          preConfirm: () => { }
        })
      }
    }
  })
}