// ### Filter movies by Genre (and then sort them by likes) ###

document
  .getElementById("dropAction")
  .addEventListener("click", searchSortAction);

const listActions = movies.filter((e) => e.genre.includes("Action"));

function searchSortAction() {
  listActions.sort((a, b) => b.likes - a.likes);
  const newCards = document.getElementById("content");
  newCards.textContent = "";
  newCardsAction();
  newActionLikeBtns();
}

function newCardsAction() {
  for (i = 0; i < listActions.length; i++) {
    content.innerHTML +=
      "<div class='card col-sm-5 mb-3 mx-auto' style='max-width: 540px'><div class='row g-0'><div class='inCard1 rounded-start liButton col-md-4 ps-2 pt-2'><img src='" +
      listActions[i].image +
      "' class='img-fluid'></div><div class='inCard2 rounded-end col-md-8'><div class='card-body'><h5 class='card-title'>" +
      listActions[i].movieName +
      "</h5><p class='card-text'>" +
      listActions[i].description +
      "</p><p class='card-text'>directed by: " +
      listActions[i].director +
      "</p><div>" +
      listActions[i].genre +
      ", " +
      listActions[i].year +
      " <button class='liCount btn btn-sm btn-secondary ps-1 ms-3 pb-0 pt-1' disabled><img src='./images/like_star.png'>" + // ### Like-button counter target ###
      listActions[i].likes +
      "</div></div></div></div></div>";
  }
}

function newActionLikeBtns() {
  for (let i in listActions) {
    var buttonCount = document.getElementsByClassName("liButton");
    var countTarget = document.getElementsByClassName("liCount");
    buttonCount[i].innerHTML +=
      "<button class='blike btn btn-sm btn-success mt-2 py-0'>Like +1</button>";
    var bcount = document.getElementsByClassName("blike");
    bcount[i].addEventListener("click", addLike);
    function addLike() {
      let up = parseInt(listActions[i].likes) + 1;
      countTarget[i].innerHTML = "<img src='./images/like_star.png'>" + up;
      listActions[i].likes = up;
      //JSON.stringify();             // ### This was just a test ###
    }
  }
}
