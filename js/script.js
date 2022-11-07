// slider
const slider = document.querySelector(".testimonial-slider");
const btnLeft = document.querySelector(".slide-left");
const btnRight = document.querySelector(".slide-right");

let position = 0;
const viewportWidth = window.screen.availWidth;
const testimonialWidth = viewportWidth <= 544 ? 100 : 50;
const testimonialAmount = document.querySelectorAll(".testimonial").length;
btnLeft.addEventListener("click", function () {
  position += testimonialWidth;
  if (position > 0) {
    position = -(testimonialAmount - 1) * testimonialWidth;
  }
  slider.style.transform = `translateX(${position}%)`;
});
btnRight.addEventListener("click", function () {
  position -= testimonialWidth;
  if (-position >= testimonialAmount * testimonialWidth) {
    position = 0;
  }
  slider.style.transform = `translateX(${position}%)`;
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
//smooth scrolling animation
const heroSection = document.querySelector(".hero__section");
const navBox = document.querySelector(".nav-box");
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (link.classList.contains("nav-link")) {
      navBox.classList.toggle("open");
      navBox.classList.toggle("close");
      openMenu.classList.toggle("mobile-close-menu");
    }
  })
);
// Sticky nav
const bodyEl = document.querySelector("body");
const sectionHeroEL = document.querySelector(".hero__section");

const observer = new IntersectionObserver(
  function (ent) {
    if (!ent[0].isIntersecting) {
      bodyEl.classList.add("sticky-nav");
    } else {
      bodyEl.classList.remove("sticky-nav");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEL);
