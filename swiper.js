// tabs
var tabs = document.getElementsByClassName("tab");
for (var tab of tabs) {
  tab.style.display = "none";
  document.getElementById("register").style.display = "block";
}
function displayTab(id) {
  for (var tab of tabs) {
    tab.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
var buttons = document.querySelectorAll("button");
for (var button of buttons) {
  button.addEventListener("click", function () {
    for (var x of buttons) {
      x.classList.remove("selected");
    }
    this.classList.add("selected");
  });
}

// swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: true,
  spaceBetween: 150,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
      slidesPerGroups: 2,
    },
    1000: {
      slidesPerView: 3,
      slidesPerGroups: 3,
    },
  },
});
