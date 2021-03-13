// ### Filter movies by Genre (and then sort them by likes) ###

document
  .getElementById("dropHorror")
  .addEventListener("click", searchSortHorror);

const listHorrors = movies.filter((e) => e.genre.includes("Horror"));

function searchSortHorror() {
  listHorrors.sort((a, b) => b.likes - a.likes);
  const newCards = document.getElementById("content");
  newCards.textContent = "";
  newCardsHorror();
  newHorrorLikeBtns();
}

function newCardsHorror() {
  for (i = 0; i < listHorrors.length; i++) {
    content.innerHTML +=
      "<div class='card col-sm-5 mb-3 mx-auto' style='max-width: 540px'><div class='row g-0'><div class='inCard liButton col-md-4 ps-2 pt-2'><img src='" +
      listHorrors[i].image +
      "' class='img-fluid'></div><div class='inCard col-md-8'><div class='card-body'><h5 class='card-title'>" +
      listHorrors[i].movieName +
      "</h5><p class='card-text'>" +
      listHorrors[i].description +
      "</p><p class='card-text'>directed by: " +
      listHorrors[i].director +
      "</p><small class='text-muted'>" +
      listHorrors[i].genre +
      ", " +
      listHorrors[i].year +
      "</small></p>" +
      "<div>likes</div><div class='liCount'>" + // ### Like-button counter target ###
      listHorrors[i].likes +
      "</div></div></div></div></div>";
  }
}

function newHorrorLikeBtns() {
  for (let i in listHorrors) {
    var buttonCount = document.getElementsByClassName("liButton");
    var countTarget = document.getElementsByClassName("liCount");
    buttonCount[i].innerHTML +=
      "<button class='blike btn btn-sm btn-success mt-2 py-0'>Like +1</button>";
    var bcount = document.getElementsByClassName("blike");
    bcount[i].addEventListener("click", addLike);
    function addLike() {
      let up = parseInt(listHorrors[i].likes) + 1;
      countTarget[i].innerHTML = up;
      listHorrors[i].likes = up;
      //JSON.stringify();             // ### This was just a test ###
    }
  }
}