const $burger = document.querySelector(".burger");
// console.log($burger);
const $navbarContainer = document.querySelector(".navLinks");
const $navLinks = document.querySelectorAll(".navbar_container li a");

$burger.addEventListener("click", () => {
  $navbarContainer.classList.toggle("nav_click");
  $burger.classList.toggle("burger-clicked");
  $navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navlinkAnimations 0.5s ease forwards ${
        index / 5 + 0.5
      }s`;
    }
  });
});
