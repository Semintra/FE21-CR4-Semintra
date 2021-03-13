// ### Filter movies by Genre (and then sort them by likes) ###

document.getElementById("dropDrama").addEventListener("click", searchSortDrama);

const listDramas = movies.filter((e) => e.genre.includes("Drama"));

function searchSortDrama() {
  listDramas.sort((a, b) => b.likes - a.likes);
  const newCards = document.getElementById("content");
  newCards.textContent = "";
  newCardsDrama();
  newDramaLikeBtns();
}

function newCardsDrama() {
  for (i = 0; i < listDramas.length; i++) {
    content.innerHTML +=
      "<div class='card col-sm-5 mb-3 mx-auto' style='max-width: 540px'><div class='row g-0'><div class='inCard1 rounded-start liButton col-md-4 ps-2 pt-2'><img src='" +
      listDramas[i].image +
      "' class='img-fluid'></div><div class='inCard2 rounded-end col-md-8'><div class='card-body'><h5 class='card-title'>" +
      listDramas[i].movieName +
      "</h5><p class='card-text'>" +
      listDramas[i].description +
      "</p><p class='card-text'>directed by: " +
      listDramas[i].director +
      "</p><div class='text-muted'>" +
      listDramas[i].genre +
      ", " +
      listDramas[i].year +
      " <button class='liCount btn btn-sm btn-secondary ps-1 ms-3 pb-0 pt-1'><img src='./images/like_star.png'>" + // ### Like-button counter target ###
      listDramas[i].likes +
      "</div></div></div></div></div>";
  }
}

function newDramaLikeBtns() {
  for (let i in listDramas) {
    var buttonCount = document.getElementsByClassName("liButton");
    var countTarget = document.getElementsByClassName("liCount");
    buttonCount[i].innerHTML +=
      "<button class='blike btn btn-sm btn-success mt-2 py-0'>Like +1</button>";
    var bcount = document.getElementsByClassName("blike");
    bcount[i].addEventListener("click", addLike);
    function addLike() {
      let up = parseInt(listDramas[i].likes) + 1;
      countTarget[i].innerHTML = "<img src='./images/like_star.png'>" + up;
      listDramas[i].likes = up;
      //JSON.stringify();             // ### This was just a test ###
    }
  }
}
