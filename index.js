var activePage = "skills";

function hide(id) {
  $("#" + id).style.display = "none";
}

function show(id) {
  var page = $(`#${id}`);
  page.style.display = "block";
}

function $(selector) {
  return document.querySelector(selector);
}

function displayPage(id) {
  hide(activePage);
  $(`#top-menu-bar a[data-page="${activePage}"]`).classList.remove("active");
  activePage = id;
  show(id);
  $(`#top-menu-bar a[data-page="${id}"]`).classList.add("active");
}

function ckickOnMenu(e) {
  if (e.target.matches("a")) {
    var id = e.target.dataset.page;
    if (id) {
      displayPage(id);
    } else {
      console.warn(`please use <a data-page="page-id"> `);
    }
  }
}

function showSkillsList() {
  var ul = $("#skills ul");
  var skills = ["HTML", "CSS", "JS"];
  var skillsHTML = skills.map(function (skill) {
    // <li class="favorite">HTML</li>
    return `<li>${skill}</li>`;
  });
  ul.innerHTML = skillsHTML.join("");
}

displayPage(activePage);
$("#top-menu-bar").addEventListener("click", ckickOnMenu);
showSkillsList();
