// ### Filter movies by Genre (and then sort them by likes) ###

document
  .getElementById("dropAdventure")
  .addEventListener("click", searchSortAdventure);

const listAdventuries = movies.filter((e) => e.genre.includes("Adventure"));

function searchSortAdventure() {
  listAdventuries.sort((a, b) => b.likes - a.likes);
  const newCards = document.getElementById("content");
  newCards.textContent = "";
  newCardsAdventure();
  newAdventureLikeBtns();
}

function newCardsAdventure() {
  for (i = 0; i < listAdventuries.length; i++) {
    content.innerHTML +=
      "<div class='card col-sm-5 mb-3 mx-auto' style='max-width: 540px'><div class='row g-0'><div class='inCard liButton col-md-4 ps-2 pt-2'><img src='" +
      listAdventuries[i].image +
      "' class='img-fluid'></div><div class='inCard col-md-8'><div class='card-body'><h5 class='card-title'>" +
      listAdventuries[i].movieName +
      "</h5><p class='card-text'>" +
      listAdventuries[i].description +
      "</p><p class='card-text'>directed by: " +
      listAdventuries[i].director +
      "</p><small class='text-muted'>" +
      listAdventuries[i].genre +
      ", " +
      listAdventuries[i].year +
      "</small></p>" +
      "<div>likes</div><div class='liCount'>" + // ### Like-button counter target ###
      listAdventuries[i].likes +
      "</div></div></div></div></div>";
  }
}

function newAdventureLikeBtns() {
  for (let i in listAdventuries) {
    var buttonCount = document.getElementsByClassName("liButton");
    var countTarget = document.getElementsByClassName("liCount");
    buttonCount[i].innerHTML +=
      "<button class='blike btn btn-sm btn-success mt-2 py-0'>Like +1</button>";
    var bcount = document.getElementsByClassName("blike");
    bcount[i].addEventListener("click", addLike);
    function addLike() {
      let up = parseInt(listAdventuries[i].likes) + 1;
      countTarget[i].innerHTML = up;
      listAdventuries[i].likes = up;
      //JSON.stringify();             // ### This was just a test ###
    }
  }
}
