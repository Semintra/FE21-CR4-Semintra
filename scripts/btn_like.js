// ### Add Like-buttons ###

function btnLikes() {
  for (let i in movies) {
    var buttonCount = document.getElementsByClassName("card");
    var countTarget = document.getElementsByClassName("liCount");
    buttonCount[i].innerHTML += "<button class='blike'>Like me</button>";
    var bcount = document.getElementsByClassName("blike");
    bcount[i].addEventListener("click", addLike);
    function addLike() {
      let up = parseInt(movies[i].likes) + 1;
      countTarget[i].innerHTML = up;
      movies[i].likes = up;
      //JSON.stringify();             // ### This was just a test ###
    }
  }
}

btnLikes();
