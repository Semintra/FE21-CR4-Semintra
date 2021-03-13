// ### Sort-function (by Likes) ###

document.getElementById("sort").addEventListener("click", sortBtn);

// ### Clear Content-container from old cards ###

function sortBtn() {
  movies.sort((a, b) => b.likes - a.likes);
  const newCards = document.getElementById("content");
  newCards.textContent = "";
  movieCards();
  btnLikes();
}
