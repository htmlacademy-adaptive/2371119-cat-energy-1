const slider = document.querySelector('.slider');
const sliderBefore = slider.querySelector('.slider__before');
const beforeImage = sliderBefore.querySelector('img');
const sliderThumb = slider.querySelector('.slider__thumb');

document.addEventListener('DOMContentLoaded', () => {
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

slider.addEventListener('mousedown', () => {
  isActive = true;
});

slider.addEventListener('mouseup', () => {
  isActive = false;
});

slider.addEventListener('mouseleave', () => {
  isActive = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvenets(e);
});

slider.addEventListener('touchstart', () => {
  isActive = true;
});

slider.addEventListener('touchend', () => {
  isActive = false;
});

slider.addEventListener('touchcancel', () => {
  isActive = false;
});

slider.addEventListener('touchmove', () => {
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
