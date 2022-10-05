const ENDPOINT = returnEndpoint();
const loadTable = () => {

  axios.get(`${ENDPOINT}/publishers`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        var trHTML = '';
        data.forEach(element => {
          trHTML += '<tr class="table-active">';
          trHTML += '<td>' + element.id + '</td>';
          trHTML += '<td>' + element.name + '</td>';
          trHTML += '<td>' + element.City.name + '</td>';
          trHTML += '<td>' + element.City.State.name + '</td>';
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
  const state = document.getElementById("mySelect").value;
  const city = document.getElementById("mySelect2").value;
  axios.post(`${ENDPOINT}/publishers`, {
    name: name,
    CityId: city,
    StateId: state
  })
    .then((response) => {
      Swal.fire(`Publisher ${response.data.name} created`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to create publisher: ${error.response.data.error} `)
        .then(() => {
          showUserCreateBox();
        })
    });
}

const getUser = (id) => {
  return axios.get(`${ENDPOINT}/publishers/` + id);
}

const userEdit = () => {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const city = document.getElementById("mySelect2").value;
  const state = document.getElementById("mySelect").value;
  console.log(city);
  axios.put(`${ENDPOINT}/publishers/` + id, {
    name: name,
    CityId: city,
    StateId: state
  })
    .then((response) => {
      Swal.fire(`Publisher ${response.data.name} updated`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to update publisher: ${error.response.data.error} `)
        .then(() => {
          showUserEditBox(id);
        })
    });
}

const userDelete = async (id) => {
  const user = await getUser(id);
  const data = user.data;
  axios.delete(`${ENDPOINT}/publishers/` + id)
    .then((response) => {
      Swal.fire(`Publisher ${data.name} deleted`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to delete publisher: ${error.response.data.error} `);
      loadTable();
    });
};

const attCities = async () => {
  axios.get(`${ENDPOINT}/cities`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        var trHTML = '';
        const state = document.getElementById("mySelect").value;
        data.forEach((element) => {
          trHTML += '<tr>';
          if (element.StateId === Number(state)) {
            trHTML += `<option value="${element.id}">${element.name}</option>`;
          }
          trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(' + element.id + ')">Edit</button>';
          trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + element.id + ')">Del</button></td>';
          trHTML += "</tr>";
        });
        document.getElementById("mySelect2").innerHTML = trHTML;
      }
    })
}

const showUserCreateBox = () => {
  axios.get(`${ENDPOINT}/states`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        var trHTML = '';
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
    title: 'Create publisher',
    html:
      '<input id="id" type="hidden">' +
      '<input id="name" class="swal2-input" placeholder="Name">' +
      `<select class="swal2-input w-75 h-40 onchange="att()" id="mySelect"></select>` +
      '<select class="swal2-input w-75 h-40" id="mySelect2"></select>',
    didOpen: async () => {
      let select = document.getElementById("mySelect");
      let selected = document.getElementById("mySelect").value;
      console.log(selected);
      attCities();
      select.onchange = () => {
        attCities();
      };
    },
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
        const data = response.data;
        var trHTML = '';
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
    title: 'Edit Publisher',
    html:
      '<input id="id" type="hidden" value=' + data.id + '>' +
      '<input id="name" class="swal2-input" placeholder="Name" value="' + data.name + '">' +
      '<select class="swal2-input w-75 h-40" id="mySelect"></select>' +
      '<select class="swal2-input w-75 h-40" id="mySelect2"></select>',
    didOpen: async () => {
      let select = document.getElementById("mySelect");
      let selected = document.getElementById("mySelect").value;
      console.log(selected);
      attCities();
      select.onchange = () => {
        attCities();
      };
    },
    focusConfirm: false,
    showCancelButton: true,
    preConfirm: () => {
      userEdit();
    }
  });
}

const search = (req) => {
  const input = document.getElementById('input').value;
  axios.get(`${ENDPOINT}/${req}`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        var trHTML = '';
        data.forEach((dat) => {
          if (dat.name.match(input)) {
            trHTML += '<tr class="table-active">';
            trHTML += '<td>' + dat.id + '</td>';
            trHTML += '<td>' + dat.name + '</td>';
            trHTML += '<td>' + dat.City.name + '</td>';
            trHTML += '<td>' + dat.City.State.name + '</td>';
            trHTML += '<td><button type="button" class="btn btn-outline-warning" style="margin-right: 5px;" onclick="showUserEditBox(' + dat.id + ')">Edit</button>';
            trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + dat.id + ')">Del</button></td>';
            trHTML += "</tr>";
          }
        });
        document.getElementById("mytable").innerHTML = trHTML;
      }
    })
};