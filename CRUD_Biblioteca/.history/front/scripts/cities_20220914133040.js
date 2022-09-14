const ENDPOINT = returnEndpoint();
const loadTable = () => {
  axios.get(`${ENDPOINT}/cities`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        var trHTML = '';
        data.forEach(element => {
          trHTML += '<tr class="table-active">';
          trHTML += '<td>' + element.id + '</td>';
          trHTML += '<td>' + element.name + '</td>';
          trHTML += '<td>' + element.cep + '</td>';
          trHTML += '<td>' + element.State.name + '</td>';
          trHTML += '<td><button type="button" class="btn btn-outline-warning" style="margin-right: 5px;" onclick="showUserEditBox(' + element.id + ')">Edit</button>';
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
  const cep = document.getElementById("cep").value;
  const province = document.getElementById("mySelect").value;
  axios.post(`${ENDPOINT}/cities`, {
    name: name,
    cep: cep,
    StateId: province
  })
    .then((response) => {
      Swal.fire(`City ${response.data.name} created`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to create city: ${error.response.data.error} `)
        .then(() => {
          showUserCreateBox();
        })
    });
}

const getUser = (id) => {
  return axios.get(`${ENDPOINT}/cities/` + id);
}

const userEdit = () => {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const cep = document.getElementById("cep").value;
  const province = document.getElementById("mySelect").value;

  axios.put(`${ENDPOINT}/cities/` + id, {
    name: name,
    cep: cep,
    StateId: province
  })
    .then((response) => {
      Swal.fire(`City ${response.data.name} updated`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to update city: ${error.response.data.error} `)
        .then(() => {
          showUserEditBox(id);
        })
    });
}

const userDelete = async (id) => {
  const user = await getUser(id);
  const data = user.data;
  axios.delete(`${ENDPOINT}/cities/` + id)
    .then((response) => {
      Swal.fire(`City ${data.name} deleted`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to delete city: ${error.response.data.error} `);
      loadTable();
    });
};

const showUserCreateBox = () => {
  axios.get(`${ENDPOINT}/states`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        var trHTML = '';
        trHTML += `<option selected disabled>Choose a State</option>`
        data.forEach((element) => {
          trHTML += '<tr>';
          trHTML += `<option value="${element.id}">${element.name}</option>`;
          trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(' + element.id + ')">Edit</button>';
          trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + element.id + ')">Del</button></td>';
          trHTML += "</tr>";
        });
        document.getElementById("mySelect").innerHTML = trHTML;
      }
    })
  Swal.fire({
    title: 'Create City',
    html:
      '<input id="id" type="hidden">' +
      '<input id="name" class="swal2-input" placeholder="Name">' +
      '<input id="cep" class="swal2-input" placeholder="CEP">' +
      '<select class="swal2-input w-75 h-40" id="mySelect">' +
      '</select>',
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
  axios.get(`${ENDPOINT}/states`)
    .then((response) => {
      if (response.status === 200) {
        const dataStates = response.data;
        var trHTML = '';
        dataStates.forEach((element) => {
          trHTML += '<tr>';
          if (data.StateId === element.id) {
            trHTML += `<option value="${element.id}" selected>${element.name}`;
          } else {
            trHTML += `<option value="${element.id}">${element.name}</option>`;
          }
          trHTML += "</tr>";
        });
        document.getElementById("mySelect").innerHTML = trHTML;
      }
    })
  Swal.fire({
    title: 'Edit City',
    html:
      '<input id="id" type="hidden" value=' + data.id + '>' +
      '<input id="name" class="swal2-input" placeholder="Name" value="' + data.name + '">' +
      '<input id="cep" class="swal2-input" placeholder="Cep" value="' + data.cep + '">' +
      '<select class="swal2-input w-75 h-40" id="mySelect">' +
      '</select>',
    focusConfirm: false,
    showCancelButton: true,
    preConfirm: () => {
      userEdit();
    }
  });
}

const searchCity = () => {
  const cityName = document.getElementById('cityName').value;
  axios.get(`${ENDPOINT}/cities`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        var trHTML = '';
        data.forEach((city) => {
          if (city.name.match(cityName)) {
            trHTML += '<tr class="table-active">';
            trHTML += '<td>' + city.id + '</td>';
            trHTML += '<td>' + city.name + '</td>';
            trHTML += '<td>' + city.cep + '</td>';
            trHTML += '<td>' + city.State.name + '</td>';
            trHTML += '<td><button type="button" class="btn btn-outline-warning" onclick="showUserEditBox(' + city.id + ')">Edit</button>';
            trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + city.id + ')">Del</button></td>';
            trHTML += "</tr>";
          }
        });
        document.getElementById("mytable").innerHTML = trHTML;
      }
    })
};