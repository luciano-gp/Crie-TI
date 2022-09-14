const ENDPOINT = returnEndpoint();
const loadTable = () => {
  axios.get(`${ENDPOINT}/formats`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        var trHTML = '';
        data.forEach(element => {
          trHTML += '<tr class="table-active">';
          trHTML += '<td  >' + element.id + '</td>';
          trHTML += '<td>' + element.description + '</td>';
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
  const description = document.getElementById("description").value;
  console.log(description);
  axios.post(`${ENDPOINT}/formats`, {
    description: description
  })
    .then((response) => {
      Swal.fire(`Format ${response.data.description} created`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to create format: ${error.response.data.error} `)
        .then(() => {
          showUserCreateBox();
        })
    });
}

const getUser = (id) => {
  return axios.get(`${ENDPOINT}/formats/` + id);
}

const userEdit = () => {
  const id = document.getElementById("id").value;
  const description = document.getElementById("description").value;

  axios.put(`${ENDPOINT}/formats/` + id, {
    description: description,
  })
    .then((response) => {
      Swal.fire(`Format ${response.data.description} updated`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to update format: ${error.response.data.error} `)
        .then(() => {
          showUserEditBox(id);
        })
    });
}

const userDelete = async (id) => {
  const user = await getUser(id);
  const data = user.data;
  axios.delete(`${ENDPOINT}/formats/` + id)
    .then((response) => {
      Swal.fire(`Format ${data.description} deleted`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to delete format: ${error.response.data.error} `);
      loadTable();
    });
};

const showUserCreateBox = () => {
  Swal.fire({
    title: 'Create format',
    html:
      '<input id="id" type="hidden">' +
      '<input id="description" class="swal2-input" placeholder="Description">',
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
    title: 'Edit Format',
    html:
      '<input id="id" type="hidden" value=' + data.id + '>' +
      '<input id="description" class="swal2-input" placeholder="Description" value="' + data.description + '">',
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
          if (dat.description.match(input)) {
            trHTML += '<tr class="table-active">';
            trHTML += '<td>' + dat.id + '</td>';
            trHTML += '<td>' + dat.description + '</td>';
            trHTML += '<td><button type="button" class="btn btn-outline-warning" onclick="showUserEditBox(' + dat.id + ')">Edit</button>';
            trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + dat.id + ')">Del</button></td>';
            trHTML += "</tr>";
          }
        });
        document.getElementById("mytable").innerHTML = trHTML;
      }
    })
};

