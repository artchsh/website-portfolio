// from main page to projects by middle card
function toProjects() {
  var cardLeft = document.getElementById("toPage1");
  var card = document.getElementById("toProjects");
  var cardRight = document.getElementById("toPage2");
  card.classList.add("toProjects");
  cardLeft.classList.add("toProjectsOthers");
  cardRight.classList.add("toProjectsOthers");
  setTimeout(() => {
    $("#changingContent").load("myprojects.html");
    document.getElementById('menu').innerHTML += ` <i class="fa-solid fa-chevron-right"></i>  Projects`;
  }, 1000);
}