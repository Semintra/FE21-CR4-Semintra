// ### Filter movies by Genre (and then sort them by likes) ###

document
  .getElementById("dropThrill")
  .addEventListener("click", searchSortThrill);

const listThrillers = movies.filter((e) => e.genre.includes("Thriller"));

function searchSortThrill() {
  listThrillers.sort((a, b) => b.likes - a.likes);
  const newCards = document.getElementById("content");
  newCards.textContent = "";
  newCardsThrill();
  newThrillLikeBtns();
}

function newCardsThrill() {
  for (i = 0; i < listThrillers.length; i++) {
    content.innerHTML +=
      "<div class='card col-sm-5 mb-3 mx-auto' style='max-width: 540px'><div class='row g-0'><div class='inCard1 rounded-start liButton col-md-4 ps-2 pt-2'><img src='" +
      listThrillers[i].image +
      "' class='img-fluid'></div><div class='inCard2 rounded-end col-md-8'><div class='card-body'><h5 class='card-title'>" +
      listThrillers[i].movieName +
      "</h5><p class='card-text'>" +
      listThrillers[i].description +
      "</p><p class='card-text'>directed by: " +
      listThrillers[i].director +
      "</p><small class='text-muted'>" +
      listThrillers[i].genre +
      ", " +
      listThrillers[i].year +
      "</small></p>" +
      "<div>likes</div><div class='liCount'>" + // ### Like-button counter target ###
      listThrillers[i].likes +
      "</div></div></div></div></div>";
  }
}

function newThrillLikeBtns() {
  for (let i in listThrillers) {
    var buttonCount = document.getElementsByClassName("liButton");
    var countTarget = document.getElementsByClassName("liCount");
    buttonCount[i].innerHTML +=
      "<button class='blike btn btn-sm btn-success mt-2 py-0'>Like +1</button>";
    var bcount = document.getElementsByClassName("blike");
    bcount[i].addEventListener("click", addLike);
    function addLike() {
      let up = parseInt(listThrillers[i].likes) + 1;
      countTarget[i].innerHTML = up;
      listThrillers[i].likes = up;
      //JSON.stringify();             // ### This was just a test ###
    }
  }
}
