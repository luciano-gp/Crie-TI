const ENDPOINT = returnEndpoint();
const loadTable = () => {

  axios.get(`${ENDPOINT}/books`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        var trHTML = '';
        data.forEach(element => {
          trHTML += '<tr class="table-active">';
          trHTML += '<td>' + element.id + '</td>';
          trHTML += '<td>' + element.title + '</td>';
          trHTML += '<td>' + element.author + '</td>';
          trHTML += '<td>' + element.pages + '</td>';
          trHTML += '<td>$ ' + element.value + '</td>';
          trHTML += '<td>' + element.Publisher.name + '</td>';
          trHTML += '<td>' + element.publication_year + '</td>';
          trHTML += '<td>' + element.Categorie.description + '</td>';
          trHTML += '<td>' + element.Format.description + '</td>';
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
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const pages = document.getElementById("pages").value;
  const value = document.getElementById("value").value;
  const format = document.getElementById("mySelectFormat").value;
  const publisher = document.getElementById("mySelect").value;
  const categorie = document.getElementById("mySelect2").value;
  axios.post(`${ENDPOINT}/books`, {
    title: title,
    author: author,
    publication_year: year,
    pages: pages,
    value: value,
    PublisherId: Number(publisher),
    CategorieId: Number(categorie),
    FormatId: Number(format)
  })
    .then((response) => {
      Swal.fire(`Book ${response.data.title} created`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to create book: ${error.response.data.error} `)
        .then(() => {
          showUserCreateBox();
        })
    });
}

const getUser = (id) => {
  return axios.get(`${ENDPOINT}/books/` + id);
}

const userEdit = () => {
  const id = document.getElementById("id").value;
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const pages = document.getElementById("pages").value;
  const value = document.getElementById("value").value;
  const format = document.getElementById("mySelectFormat").value;
  const publisher = document.getElementById("mySelect").value;
  const categorie = document.getElementById("mySelect2").value;
  axios.put(`${ENDPOINT}/books/` + id, {
    title: title,
    author: author,
    publication_year: year,
    pages: pages,
    value: value,
    PublisherId: Number(publisher),
    CategorieId: Number(categorie),
    FormatId: Number(format)
  })
    .then((response) => {
      Swal.fire(`Book ${response.data.title} updated`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to update book: ${error.response.data.error} `)
        .then(() => {
          showUserEditBox(id);
        })
    });
}

const userDelete = async (id) => {
  const user = await getUser(id);
  const data = user.data;
  axios.delete(`${ENDPOINT}/books/` + id)
    .then((response) => {
      Swal.fire(`Book ${data.title} deleted`);
      loadTable();
    }, (error) => {
      Swal.fire(`Error to delete book: ${error.response.data.error} `);
      loadTable();
    });
};

const showUserCreateBox = () => {
  axios.get(`${ENDPOINT}/formats`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        var trHTML = '';
        trHTML += `<option selected disabled>Choose a Format</option>`;
        data.forEach((element) => {
          trHTML += '<tr>';
          trHTML += `<option value="${element.id}">${element.description}</option>`;
          trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(' + element.id + ')">Edit</button>';
          trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + element.id + ')">Del</button></td>';
          trHTML += "</tr>";
        });
        document.getElementById("mySelectFormat").innerHTML = trHTML;
      }
    })
  axios.get(`${ENDPOINT}/publishers`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        var trHTML = '';
        trHTML += `<option selected disabled>Choose a Publisher</option>`;
        data.forEach((element) => {
          trHTML += '<tr>';
          trHTML += `<option value="${element.id}">${element.name}</option>`;
          trHTML += '<td><button type="button" class="btn btn-outline-warning" onclick="showUserEditBox(' + element.id + ')">Edit</button>';
          trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + element.id + ')">Del</button></td>';
          trHTML += "</tr>";
        });
        document.getElementById("mySelect").innerHTML = trHTML;
      }
    })
  axios.get(`${ENDPOINT}/categories`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        var trHTML = '';
        trHTML += `<option selected disabled>Choose a Categorie</option>`;
        data.forEach((element) => {
          trHTML += '<tr>';
          trHTML += `<option value="${element.id}">${element.description}</option>`;
          trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(' + element.id + ')">Edit</button>';
          trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + element.id + ')">Del</button></td>';
          trHTML += "</tr>";
        });
        document.getElementById("mySelect2").innerHTML = trHTML;
      }
    })
  Swal.fire({
    title: 'Create book',
    html:
      '<input id="id" type="hidden">' +
      '<input id="title" class="swal2-input" placeholder="Title">' +
      '<input id="author" class="swal2-input" placeholder="Author">' +
      '<input id="year" class="swal2-input" placeholder="Year">' +
      '<input id="pages" class="swal2-input" placeholder="Pages">' +
      '<input id="value" class="swal2-input" placeholder="Value">' +
      `<select class="swal2-input w-75 h-40 onchange="att()" id="mySelectFormat"></select>` +
      `<select class="swal2-input w-75 h-40 onchange="att()" id="mySelect"></select>` +
      '<select class="swal2-input w-75 h-40" id="mySelect2"></select>',
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
  axios.get(`${ENDPOINT}/formats`)
    .then((response) => {
      if (response.status === 200) {
        const dataFormats = response.data;
        var trHTML = '';
        trHTML += `<option selected disabled>Choose a Format</option>`;
        dataFormats.forEach((element) => {
          trHTML += '<tr>';
          if (data.FormatId === element.id) {
            trHTML += `<option value="${element.id}" selected>${element.description}</option>`;
          } else {
            trHTML += `<option value="${element.id}">${element.description}</option>`;
          }
        });
        document.getElementById("mySelectFormat").innerHTML = trHTML;
      }
    })
  axios.get(`${ENDPOINT}/publishers`)
    .then((response) => {
      if (response.status === 200) {
        const dataPublishers = response.data;
        var trHTML = '';
        dataPublishers.forEach((element) => {
          trHTML += '<tr>';
          if (data.PublisherId === element.id) {
            trHTML += `<option value="${element.id}" selected>${element.name}</option>`;
          } else {
            trHTML += `<option value="${element.id}">${element.name}</option>`;
          }
        });
        document.getElementById("mySelect").innerHTML = trHTML;
      }
    })
  axios.get(`${ENDPOINT}/categories`)
    .then((response) => {
      if (response.status === 200) {
        const dataCategories = response.data;
        var trHTML = '';
        trHTML += `<option selected disabled>Categorie</option>`;
        dataCategories.forEach((element) => {
          trHTML += '<tr>';
          if (data.CategorieId === element.id) {
            trHTML += `<option value="${element.id}" selected>${element.description}`;
          } else {
            trHTML += `<option value="${element.id}">${element.description}</option>`;
          }
        });
        document.getElementById("mySelect2").innerHTML = trHTML;
      }
    })
  Swal.fire({
    title: 'Edit Book',
    html:
      `<input id="id" type="hidden" value="${data.id}">` +
      `<input id="title" class="swal2-input" placeholder="Title" value="${data.title}"></input>` +
      `<input id="author" class="swal2-input" placeholder="Author" value="${data.author}">` +
      '<input id="year" class="swal2-input" placeholder="Year" value=' + data.publication_year + '>' +
      '<input id="pages" class="swal2-input" placeholder="Pages" value=' + data.pages + '>' +
      '<input id="value" class="swal2-input" placeholder="Value" value=' + data.value + '>' +
      `<select class="swal2-input w-75 h-40 onchange="" id="mySelectFormat"></select>` +
      `<select class="swal2-input w-75 h-40 onchange="att()" id="mySelect"></select>` +
      '<select class="swal2-input w-75 h-40" id="mySelect2"></select>',
    focusConfirm: false,
    showCancelButton: true,
    preConfirm: () => {
      userEdit();
    }
  });
}

const search = (req) => {
  const input = document.getElementById('input').value;
  const option = document.getElementById('select').value;
  axios.get(`${ENDPOINT}/${req}`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        var trHTML = '';
        if (Number(option) === 1) {
          data.forEach((dat) => {
            if (dat.title.match(input)) {
              trHTML += '<tr class="table-active">';
              trHTML += '<td>' + dat.id + '</td>';
              trHTML += '<td>' + dat.title + '</td>';
              trHTML += '<td>' + dat.author + '</td>';
              trHTML += '<td>' + dat.pages + '</td>';
              trHTML += '<td>$ ' + dat.value + '</td>';
              trHTML += '<td>' + dat.Publisher.name + '</td>';
              trHTML += '<td>' + dat.publication_year + '</td>';
              trHTML += '<td>' + dat.Categorie.description + '</td>';
              trHTML += '<td>' + dat.Format.description + '</td>';
              trHTML += '<td><button type="button" class="btn btn-outline-warning" style="margin-right: 5px;" onclick="showUserEditBox(' + dat.id + ')">Edit</button>';
              trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + dat.id + ')">Del</button></td>';
              trHTML += "</tr>";
            }
          });
        } else {
          data.forEach((dat) => {
            if (dat.Categorie.description.match(input)) {
              trHTML += '<tr class="table-active">';
              trHTML += '<td>' + dat.id + '</td>';
              trHTML += '<td>' + dat.title + '</td>';
              trHTML += '<td>' + dat.author + '</td>';
              trHTML += '<td>' + dat.pages + '</td>';
              trHTML += '<td>$ ' + dat.value + '</td>';
              trHTML += '<td>' + dat.Publisher.name + '</td>';
              trHTML += '<td>' + dat.publication_year + '</td>';
              trHTML += '<td>' + dat.Categorie.description + '</td>';
              trHTML += '<td>' + dat.Format.description + '</td>';
              trHTML += '<td><button type="button" class="btn btn-outline-warning" onclick="showUserEditBox(' + dat.id + ')">Edit</button>';
              trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + dat.id + ')">Del</button></td>';
              trHTML += "</tr>";
            }
          });
        }
        document.getElementById("mytable").innerHTML = trHTML;
      }
    })
};