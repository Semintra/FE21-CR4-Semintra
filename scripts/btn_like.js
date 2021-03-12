// ### Add Like-buttons ###

function btnLikes() {
  for (let i in movies) {
    var buttonCount = document.getElementsByClassName("card");
    var countTarget = document.getElementsByClassName("liCount");
    buttonCount[i].innerHTML += "<button> Like me (" + i + ")</button>";
    buttonCount[i].addEventListener("click", addLike);
    function addLike() {
      let up = parseInt(movies[i].likes) + 1;
      countTarget[i].innerHTML = up;
      movies[i].likes = up;
      console.log(up);
      console.log(movies[i].likes);
    }
  }
}

btnLikes();

console.log(movies[0].likes);
