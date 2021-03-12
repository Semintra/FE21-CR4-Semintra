//////////////////////////

// ### Parse JSON-file ###

var movies = JSON.parse(moviedata);

var content = document.getElementById("content");

function movieCards() {
  for (i = 0; i < movies.length; i++) {
    content.innerHTML += "<div>" + movies[i].movieName + "</div>";
  }
}

console.log(movies);

movieCards();
