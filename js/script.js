const slider = document.querySelector(".testimonial-slider");
const btnLeft = document.querySelector(".slide-left");
const btnRight = document.querySelector(".slide-right");

let x = 0;
const testimonialAmount = document.querySelectorAll(".testimonial").length;
btnLeft.addEventListener("click", function () {
  x += 50;
  console.log(x);
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
