// ### Parse JSON-file ###

var movies = JSON.parse(moviedata);

// ### Create Movie-overview by using Bootstrap-cards ###

var content = document.getElementById("content");

function movieCards() {
  for (i = 0; i < movies.length; i++) {
    content.innerHTML +=
      "<div class='card col-sm-5 mb-3 mx-auto' style='max-width: 540px'><div class='row g-0'><div class='inCard col-md-4 ps-2 pt-2'><img src='" +
      movies[i].image +
      "' class='img-fluid'></div><div class='inCard col-md-8'><div class='card-body'><h5 class='card-title'>" +
      movies[i].movieName +
      "</h5><p class='card-text'>" +
      movies[i].description +
      "</p><p class='card-text'>directed by: " +
      movies[i].director +
      "</p><small class='text-muted'>" +
      movies[i].genre +
      ", " +
      movies[i].year +
      "</small></p>" +
      "<div>likes</div><div class='liCount'>" + // ### Like-button counter target ###
      movies[i].likes +
      "</div></div></div></div></div>";
  }
}

movieCards();
