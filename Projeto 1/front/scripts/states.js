const ENDPOINT = returnEndpoint();
const loadTable = () => {
  axios.get(`${ENDPOINT}/states`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        var trHTML = '';
        data.forEach(element => {
          trHTML += '<tr class="table-active">';
          trHTML += '<td>' + element.id + '</td>';
          trHTML += '<td>' + element.name + '</td>';
          trHTML += '<td>' + element.province + '</td>';
          trHTML += '<td><button type="button" class="btn btn-outline-warning" style="margin-right: 5px;" onclick="showUserEditBox(' + element.id + ')">Edit</button>';
          trHTML += '<button type="button" class="btn btn-outline-danger mx-2" onclick="userDelete(' + element.id + ')">Del</button></td>';
          trHTML += "</tr>";
        });
        document.getElementById("mytable").innerHTML = trHTML;
      }
    })
};

loadTable();

const userCreate = () => {
  const name = document.getElementById("name").value;
  const province = document.getElementById("province").value;
  axios.post(`${ENDPOINT}/states`, {
    name: name,
    province: province
  })
    .then((response) => {
      Swal.fire(`State ${response.data.name} created`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to create state: ${error.response.data.error} `)
        .then(() => {
          showUserCreateBox();
        })
    });
}

const getUser = (id) => {
  return axios.get(`${ENDPOINT}/states/` + id);
}

const userEdit = () => {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const province = document.getElementById("province").value;

  axios.put(`${ENDPOINT}/states/` + id, {
    name: name,
    province: province
  })
    .then((response) => {
      Swal.fire(`State ${response.data.name} updated`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to update state: ${error.response.data.error} `)
        .then(() => {
          showUserEditBox(id);
        })
    });
}

const userDelete = async (id) => {
  const user = await getUser(id);
  const data = user.data;
  axios.delete(`${ENDPOINT}/states/` + id)
    .then((response) => {
      Swal.fire(`State ${data.name} deleted`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to delete state: ${error.response.data.error} `);
      loadTable();
    });
};

const showUserCreateBox = () => {
  Swal.fire({
    title: 'Create state',
    html:
      '<input id="id" type="hidden">' +
      '<input id="name" class="swal2-input" placeholder="Name">' +
      '<input id="province" class="swal2-input" placeholder="Province">',
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
    title: 'Edit State',
    html:
      '<input id="id" type="hidden" value=' + data.id + '>' +
      '<input id="name" class="swal2-input" placeholder="Name" value="' + data.name + '">' +
      '<input id="province" class="swal2-input" placeholder="Province" value="' + data.province + '">',
    focusConfirm: false,
    showCancelButton: true,
    preConfirm: () => {
      userEdit();
    }
  });
}

const searchState = () => {
  const stateName = document.getElementById('stateName').value;
  axios.get(`${ENDPOINT}/states`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        var trHTML = '';
        data.forEach((state) => {
          if (state.name.match(stateName)) {
            trHTML += '<tr class="table-active">';
            trHTML += '<td>' + state.id + '</td>';
            trHTML += '<td>' + state.name + '</td>';
            trHTML += '<td>' + state.province + '</td>';
            trHTML += '<td><button type="button" class="btn btn-outline-warning" style="margin-right: 5px;" onclick="showUserEditBox(' + state.id + ')">Edit</button>';
            trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + state.id + ')">Del</button></td>';
            trHTML += "</tr>";
          }
        });
        document.getElementById("mytable").innerHTML = trHTML;
      }
    })
};