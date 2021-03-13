// ### Sort-function (by Likes) ###

document.getElementById("sort").addEventListener("click", sortBtn);

function sortBtn() {
  movies.sort((a, b) => b.likes - a.likes);
  const newCards = document.getElementById("content");
  newCards.textContent = "";
  movieCards();
  btnLikes();
}
