// ### Filter movies by Genre (and then sort them by likes) ###

document
  .getElementById("dropMystery")
  .addEventListener("click", searchSortMystery);

const listMysteries = movies.filter((e) => e.genre.includes("Mystery"));

// ### Clear Content-container from old cards ###

function searchSortMystery() {
  listMysteries.sort((a, b) => b.likes - a.likes);
  const newCards = document.getElementById("content");
  newCards.textContent = "";
  newCardsMystery();
  newMysteryLikeBtns();
}

// ### Build up new Genre-cards ###

function newCardsMystery() {
  for (i = 0; i < listMysteries.length; i++) {
    content.innerHTML +=
      "<div class='card col-sm-5 mb-3 mx-auto' style='max-width: 540px'><div class='row g-0'><div class='inCard1 rounded-start liButton col-md-4 ps-2 pt-2'><img src='" +
      listMysteries[i].image +
      "' class='img-fluid'></div><div class='inCard2 rounded-end col-md-8'><div class='card-body'><h5 class='card-title'>" +
      listMysteries[i].movieName +
      "</h5><p class='card-text'>" +
      listMysteries[i].description +
      "</p><p class='card-text'>directed by: " +
      listMysteries[i].director +
      "</p><div>" +
      listMysteries[i].genre +
      ", " +
      listMysteries[i].year +
      " <button class='liCount btn btn-sm btn-secondary ps-1 ms-3 pb-0 pt-1' disabled><img src='./images/like_star.png'>" + // ### Like-button counter target ###
      listMysteries[i].likes +
      "</div></div></div></div></div>";
  }
}

// ### Add new like-buttons for the new cards ###

function newMysteryLikeBtns() {
  for (let i in listMysteries) {
    var buttonCount = document.getElementsByClassName("liButton");
    var countTarget = document.getElementsByClassName("liCount");
    buttonCount[i].innerHTML +=
      "<button class='blike btn btn-sm btn-success mt-2 py-0'>Like +1</button>";
    var bcount = document.getElementsByClassName("blike");
    bcount[i].addEventListener("click", addLike);
    function addLike() {
      let up = parseInt(listMysteries[i].likes) + 1;
      countTarget[i].innerHTML = "<img src='./images/like_star.png'>" + up;
      listMysteries[i].likes = up;
      //JSON.stringify();             // ### This was just a test ###
    }
  }
}
