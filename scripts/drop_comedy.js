// ### Filter movies by Genre (and then sort them by likes) ###

document
  .getElementById("dropComedy")
  .addEventListener("click", searchSortComedy);

const listComedies = movies.filter((e) => e.genre.includes("Comedy"));

function searchSortComedy() {
  listComedies.sort((a, b) => b.likes - a.likes);
  const newCards = document.getElementById("content");
  newCards.textContent = "";
  newCardsComedy();
  newComedyLikeBtns();
}

function newCardsComedy() {
  for (i = 0; i < listComedies.length; i++) {
    content.innerHTML +=
      "<div class='card col-sm-5 mb-3 mx-auto' style='max-width: 540px'><div class='row g-0'><div class='inCard liButton col-md-4 ps-2 pt-2'><img src='" +
      listComedies[i].image +
      "' class='img-fluid'></div><div class='inCard col-md-8'><div class='card-body'><h5 class='card-title'>" +
      listComedies[i].movieName +
      "</h5><p class='card-text'>" +
      listComedies[i].description +
      "</p><p class='card-text'>directed by: " +
      listComedies[i].director +
      "</p><small class='text-muted'>" +
      listComedies[i].genre +
      ", " +
      listComedies[i].year +
      "</small></p>" +
      "<div>likes</div><div class='liCount'>" + // ### Like-button counter target ###
      listComedies[i].likes +
      "</div></div></div></div></div>";
  }
}

function newComedyLikeBtns() {
  for (let i in listComedies) {
    var buttonCount = document.getElementsByClassName("liButton");
    var countTarget = document.getElementsByClassName("liCount");
    buttonCount[i].innerHTML +=
      "<button class='blike btn btn-sm btn-success mt-2 py-0'>Like +1</button>";
    var bcount = document.getElementsByClassName("blike");
    bcount[i].addEventListener("click", addLike);
    function addLike() {
      let up = parseInt(listComedies[i].likes) + 1;
      countTarget[i].innerHTML = up;
      listComedies[i].likes = up;
      //JSON.stringify();             // ### This was just a test ###
    }
  }
}
