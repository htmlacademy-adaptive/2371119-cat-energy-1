const navbar = document.querySelector(".navbar");
const navbarButton = document.querySelector(".navbar__button");
const slider = document.querySelector(".slider");
const sliderBefore = slider.querySelector(".slider__before");
const beforeImage = sliderBefore.querySelector("img");
const sliderThumb = slider.querySelector(".slider__thumb");
const body = document.body;

let isActive = false;

document.addEventListener("DOMContentLoaded", () => {
  let width = slider.offsetWidth;
  beforeImage.style.width = `${width}px`;
});

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));
  sliderBefore.style.width = `${shift}px`;
  sliderThumb.style.left = `${shift}px`;
}

const pauseEvenets = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

body.addEventListener('mousedown', () => {
  isActive = true;
});

body.addEventListener('mouseup', () => {
  isActive = false;
});

body.addEventListener('mouseleave', () => {
  isActive = false;
});

body.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvenets(e);
});

body.addEventListener('touchstart', () => {
  isActive = true;
});

body.addEventListener('touchend', () => {
  isActive = false;
});

body.addEventListener('touchcancel', () => {
  isActive = false;
});

body.addEventListener('touchmove', () => {
  if (!isActive) {
    return;
  }

  let x;
  let i;

  for (i = 0; e < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX;
  }

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvenets(e);
});

navbarButton.addEventListener("click", () => {
  if (navbar.classList.contains("navbar--closed")) {
    navbar.classList.remove("navbar--closed");
  } else {
    navbar.classList.add("navbar--closed");
  }
});

function removeNoJs() {
  document.querySelector(".page__body--nojs").classList.remove("page__body--nojs");
  document.querySelector(".main-header--nojs").classList.remove("main-header--nojs");
  document.querySelector(".main-header__logo--nojs").classList.remove("main-header__logo--nojs");
  document.querySelector(".navbar--nojs").classList.remove("navbar--nojs");
}

removeNoJs();
