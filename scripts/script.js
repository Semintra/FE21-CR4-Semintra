// ### Parse JSON-file ###

var movies = JSON.parse(moviedata);

// ### Create Movie-overview by using Bootstrap-cards ###

var content = document.getElementById("content");

function movieCards() {
  for (i = 0; i < movies.length; i++) {
    content.innerHTML +=
      "<div class='card col-sm-5 mb-3 mx-auto' style='max-width: 540px'><div class='row g-0'><div id='rCard" +
      [i] +
      "' class='inCard1 rounded-start liButton col-md-4 ps-2 pt-2'><img src='" +
      movies[i].image +
      "' class='img-fluid'></div><div class='inCard2 rounded-end col-md-8'><div class='card-body'><h5 class='card-title'>" +
      movies[i].movieName +
      "</h5><p class='card-text'>" +
      movies[i].description +
      "</p><p class='card-text'>directed by: " +
      movies[i].director +
      "</p><div>" +
      movies[i].genre +
      ", " +
      movies[i].year +
      " <button class='liCount btn btn-sm btn-secondary ps-1 ms-3 pb-0 pt-1' disabled><img src='./images/like_star.png'>" + // ### Like-button counter target ###
      movies[i].likes +
      "</button></div></div></div></div></div>";
  }

  // ### Checking if the movies' ranks

  if (movies[0].likes > 0) {
    document.getElementById("rCard0").innerHTML +=
      "<img src='./images/rank_1.png'>";
  }
  if (movies[1].likes > 0 && movies[1].likes <= movies[0].likes) {
    document.getElementById("rCard1").innerHTML +=
      "<img src='./images/rank_2.png'>";
  }
  if (movies[2].likes > 0 && movies[2].likes <= movies[1].likes) {
    document.getElementById("rCard2").innerHTML +=
      "<img src='./images/rank_3.png'>";
  }
}

movieCards();
