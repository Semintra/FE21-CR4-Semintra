// ### Filter movies by Genre (and then sort them by likes) ###

document
  .getElementById("dropHistory")
  .addEventListener("click", searchSortHistory);

const listHistories = movies.filter((e) => e.genre.includes("Historical"));

function searchSortHistory() {
  listHistories.sort((a, b) => b.likes - a.likes);
  const newCards = document.getElementById("content");
  newCards.textContent = "";
  newCardsHistory();
  newHistoryLikeBtns();
}

function newCardsHistory() {
  for (i = 0; i < listHistories.length; i++) {
    content.innerHTML +=
      "<div class='card col-sm-5 mb-3 mx-auto' style='max-width: 540px'><div class='row g-0'><div class='inCard liButton col-md-4 ps-2 pt-2'><img src='" +
      listHistories[i].image +
      "' class='img-fluid'></div><div class='inCard col-md-8'><div class='card-body'><h5 class='card-title'>" +
      listHistories[i].movieName +
      "</h5><p class='card-text'>" +
      listHistories[i].description +
      "</p><p class='card-text'>directed by: " +
      listHistories[i].director +
      "</p><small class='text-muted'>" +
      listHistories[i].genre +
      ", " +
      listHistories[i].year +
      "</small></p>" +
      "<div>likes</div><div class='liCount'>" + // ### Like-button counter target ###
      listHistories[i].likes +
      "</div></div></div></div></div>";
  }
}

function newHistoryLikeBtns() {
  for (let i in listHistories) {
    var buttonCount = document.getElementsByClassName("liButton");
    var countTarget = document.getElementsByClassName("liCount");
    buttonCount[i].innerHTML +=
      "<button class='blike btn btn-sm btn-success mt-2 py-0'>Like +1</button>";
    var bcount = document.getElementsByClassName("blike");
    bcount[i].addEventListener("click", addLike);
    function addLike() {
      let up = parseInt(listHistories[i].likes) + 1;
      countTarget[i].innerHTML = up;
      listHistories[i].likes = up;
      //JSON.stringify();             // ### This was just a test ###
    }
  }
}
