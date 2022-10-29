// slider
const slider = document.querySelector(".testimonial-slider");
const btnLeft = document.querySelector(".slide-left");
const btnRight = document.querySelector(".slide-right");

let x = 0;
const testimonialAmount = document.querySelectorAll(".testimonial").length;
btnLeft.addEventListener("click", function () {
  x += 50;
  if (x > 0) {
    x = -(testimonialAmount - 1) * 50;
  }
  slider.style.transform = `translateX(${x}%)`;
});
btnRight.addEventListener("click", function () {
  x -= 50;
  if (-x >= testimonialAmount * 50) {
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
