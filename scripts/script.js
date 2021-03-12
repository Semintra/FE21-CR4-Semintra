//////////////////////////

// ### Parse JSON-file ###

var movies = JSON.parse(moviedata);

var content = document.getElementById("content");

function movieCards() {
  for (i = 0; i < movies.length; i++) {
    content.innerHTML +=
      '<div class="card col-sm-5 col-11 mx-auto">' +
      movies[i].movieName +
      "</div>";
  }
}

console.log(movies);

movieCards();
