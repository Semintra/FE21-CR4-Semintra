// ### Filter movies by Genre (and then sort them by likes) ###

document
  .getElementById("dropRomance")
  .addEventListener("click", searchSortRomance);

const listRomances = movies.filter((e) => e.genre.includes("Romance"));

function searchSortRomance() {
  listRomances.sort((a, b) => b.likes - a.likes);
  const newCards = document.getElementById("content");
  newCards.textContent = "";
  newCardsRoman();
  newRomanLikeBtns();
}

function newCardsRoman() {
  for (i = 0; i < listRomances.length; i++) {
    content.innerHTML +=
      "<div class='card col-sm-5 mb-3 mx-auto' style='max-width: 540px'><div class='row g-0'><div class='inCard1 rounded-start liButton col-md-4 ps-2 pt-2'><img src='" +
      listRomances[i].image +
      "' class='img-fluid'></div><div class='inCard2 rounded-end col-md-8'><div class='card-body'><h5 class='card-title'>" +
      listRomances[i].movieName +
      "</h5><p class='card-text'>" +
      listRomances[i].description +
      "</p><p class='card-text'>directed by: " +
      listRomances[i].director +
      "</p><div class='text-muted'>" +
      listRomances[i].genre +
      ", " +
      listRomances[i].year +
      " <button class='liCount btn btn-sm btn-secondary ps-1 ms-3 pb-0 pt-1'><img src='./images/like_star.png'>" + // ### Like-button counter target ###
      listRomances[i].likes +
      "</div></div></div></div></div>";
  }
}

function newRomanLikeBtns() {
  for (let i in listRomances) {
    var buttonCount = document.getElementsByClassName("liButton");
    var countTarget = document.getElementsByClassName("liCount");
    buttonCount[i].innerHTML +=
      "<button class='blike btn btn-sm btn-success mt-2 py-0'>Like +1</button>";
    var bcount = document.getElementsByClassName("blike");
    bcount[i].addEventListener("click", addLike);
    function addLike() {
      let up = parseInt(listRomances[i].likes) + 1;
      countTarget[i].innerHTML = "<img src='./images/like_star.png'>" + up;
      listRomances[i].likes = up;
      //JSON.stringify();             // ### This was just a test ###
    }
  }
}
