import './style.css'

const slider = document.querySelector('.slider');
const sliderWidth = slider.scrollWidth;
const slideWidth = sliderWidth / slider.childElementCount;
let currentSlide = 0;

setInterval(() => {
  currentSlide++;
  if (currentSlide * slideWidth >= sliderWidth) {
    currentSlide = 0;
  }
  slider.scrollLeft = currentSlide * slideWidth;
}, 5000);