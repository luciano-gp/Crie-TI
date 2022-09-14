const ENDPOINT = 'http://localhost:3000';

const validateUser = () => {
    const email = document.getElementById("email").value
    let password = document.getElementById("password").value
    password = MD5(password);
  
    axios.post(`${ENDPOINT}/validateUser`, {
      email: email,
      password: password
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        const data = response.data;
        if (data > 0) {
          window.open(`/front/html/books.html`, '_self');
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