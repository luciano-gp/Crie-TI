const ENDPOINT = "http://localhost:3000";
const loadTable = () => {
  axios.get(`${ENDPOINT}/users`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        let trHTML = '';
        data.forEach(element => {
          trHTML += '<tr class="table-active">';
          trHTML += '<td>' + element.id + '</td>';
          trHTML += '<td>' + element.name + '</td>';
          trHTML += '<td>' + element.age + '</td>';
          trHTML += '<td>' + element.sex + '</td>';
          trHTML += '<td>' + element.email + '</td>';
          trHTML += '<td>' + element.password + '</td>';
          trHTML += '<td><button type="button" class="btn btn-outline-light" onclick="showUserEditBox(' + element.id + ')">Edit</button>';
          trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + element.id + ')">Del</button></td>';
          trHTML += "</tr>";
        });
        document.getElementById("mytable").innerHTML = trHTML;
      }
    })
};

loadTable();

const userCreate = () => {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const sex = document.getElementById("sex").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  axios.post(`${ENDPOINT}/users`, {
    name: name,
    age: age,
    sex: sex,
    email: email,
    password: password
  })
    .then((response) => {
      Swal.fire(`User ${response.data.name} created`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to create user: ${error.response.data.error} `)
        .then(() => {
          showUserCreateBox();
        })
    });
}

const getUser = (id) => {
  return axios.get(`${ENDPOINT}/users/` + id);
}

const userEdit = () => {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const sex = document.getElementById("sex").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  axios.put(`${ENDPOINT}/users/` + id, {
    name: name,
    age: age,
    sex: sex,
    email: email,
    password: password
  })
    .then((response) => {
      Swal.fire(`User ${response.data.name} updated`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to update user: ${error.response.data.error} `)
        .then(() => {
          showUserEditBox(id);
        })
    });
}

const userDelete = async (id) => {
  const user = await getUser(id);
  const data = user.data;
  axios.delete(`${ENDPOINT}/users/` + id)
    .then((response) => {
      Swal.fire(`User ${data.name} deleted`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to delete user: ${error.response.data.error} `);
      loadTable();
    });
};

const showUserCreateBox = () => {
  Swal.fire({
    title: 'Create user',
    html:
      '<input id="id" type="hidden">' +
      '<input id="name" class="swal2-input" placeholder="Name">' +
      '<input id="age" class="swal2-input" placeholder="Age">' +
      '<input id="sex" class="swal2-input" placeholder="Sex">' +
      '<input id="email" class="swal2-input" placeholder="Email">' +
      '<input id="password" type="password" class="swal2-input" placeholder="Password">',
    focusConfirm: false,
    showCancelButton: true,
    preConfirm: () => {
      userCreate();
    }
  });
}

const showUserEditBox = async (id) => {
  const user = await getUser(id);
  const data = user.data;
  Swal.fire({
    title: 'Edit User',
    html:
      '<input id="id" type="hidden" value=' + data.id + '>' +
      '<input id="name" class="swal2-input" placeholder="Name" value="' + data.name + '">' +
      '<input id="age" class="swal2-input" placeholder="Age" value="' + data.age + '">' +
      '<input id="sex" class="swal2-input" placeholder="Sex" value="' + data.sex + '">' +
      '<input id="email" class="swal2-input" placeholder="Email" value="' + data.email + '">',
    focusConfirm: false,
    showCancelButton: true,
    preConfirm: () => {
      userEdit();
    }
  });
}

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
        window.open(`./html/books.html`, '_self');
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

const search = (req) => {
  const input = document.getElementById('input').value;
  axios.get(`${ENDPOINT}/${req}`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        let trHTML = '';
        data.forEach((dat) => {
          if (dat.name.match(input)) {
            trHTML += '<tr class="table-active">';
            trHTML += '<td>' + dat.id + '</td>';
            trHTML += '<td>' + dat.name + '</td>';
            trHTML += '<td>' + dat.age + '</td>';
            trHTML += '<td>' + dat.sex + '</td>';
            trHTML += '<td>' + dat.email + '</td>';
            trHTML += '<td>' + dat.password + '</td>';
            trHTML += '<td><button type="button" class="btn btn-outline-warning" onclick="showUserEditBox(' + dat.id + ')">Edit</button>';
            trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + dat.id + ')">Del</button></td>';
            trHTML += "</tr>";
          }
        });
        document.getElementById("mytable").innerHTML = trHTML;
      }
    })
};

