var numPage = 1;

function showDepas() {
  var url = "https://reqres.in/api/users?page="+numPage;
  console.log(url);
  $.ajax({
    url: url,
    method: "GET"
  }).done(function(response) {
    var currentPage = document.querySelector('#page');
    currentPage.innerHTML = numPage;
    var totalPages = response.total_pages;

    if (response.page !== 1){
      $('#prevPage').show();
    }
    else {
      $('#prevPage').hide();
    }

    if (numPage === totalPages){
      $('#nextPage').hide();
    }
    else {
      $('#nextPage').show();
    }

    var cards = document.querySelector('#card');
    cards.innerHTML = '';
    for (var i = 0; i < response.per_page; i++ ) {
      cards.innerHTML += `
        <div class="card">
          <div class="card-container">
            <div class="depa-images">
              <div id="image">
                <img src="${response.data[i].avatar}">
              </div>
              <label>Publicado</label>
            </div>
            <div class="depa-description">
              <div class="basic-table">
                <table class="table">
                  <tbody id="depas-container">
                    <tr>
                      <th class="depa-title">${response.data[i].id}</th>
                    </tr>
                    <tr>
                      <th>${response.data[i].email}</th>
                    </tr>
                    <tr>
                      <th style="padding-top:15px">${response.data[i].first_name}</th>
                    </tr>
                    <tr>
                      <th>${response.data[i].last_name}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tags-comments">
                <label>2 comentarios</label>
                <label>3 solicitudes de cita</label>
              </div>
            </div>
          </div>
        </div>
      `
    }
  });
}

function nextPage() {
  numPage++;
  showDepas();
}

function prevPage() {
  numPage--;
  showDepas();
}