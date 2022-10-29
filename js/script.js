// slider
const slider = document.querySelector(".testimonial-slider");
const btnLeft = document.querySelector(".slide-left");
const btnRight = document.querySelector(".slide-right");

let x = 0;
const viewportWidth = window.screen.availWidth;
const testimonialWidth = viewportWidth <= 544 ? 100 : 50;
const testimonialAmount = document.querySelectorAll(".testimonial").length;
btnLeft.addEventListener("click", function () {
  x += testimonialWidth;
  if (x > 0) {
    x = -(testimonialAmount - 1) * testimonialWidth;
  }
  slider.style.transform = `translateX(${x}%)`;
});
btnRight.addEventListener("click", function () {
  x -= testimonialWidth;
  if (-x >= testimonialAmount * testimonialWidth) {
    x = 0;
  }
  slider.style.transform = `translateX(${x}%)`;
});
// Mobile menu
const openMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".mobile-close-menu");
const navigation = document.querySelector(".nav-box");

openMenu.addEventListener("click", function () {
  openMenu.classList.toggle("mobile-close-menu");
  navigation.classList.toggle("open");
  navigation.classList.toggle("close");
});
