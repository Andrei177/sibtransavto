const burgerMenu = document.getElementById("burger");
const sideMenu = document.querySelector(".side-menu");
const sideMenuInner = document.querySelector(".side-menu__inner");

burgerMenu.addEventListener("click", () => {
  sideMenu.classList.toggle("show-side-menu");
  sideMenu.classList.toggle("hide-side-menu");
  burger.classList.toggle("active");
});

sideMenu.addEventListener("click", () => {
  sideMenu.classList.remove("show-side-menu");
  sideMenu.classList.toggle("hide-side-menu");
  burger.classList.toggle("active");
});
sideMenuInner.addEventListener("click", (e) => {
  e.stopPropagation();
});