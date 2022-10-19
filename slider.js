const slideElements = [...document.querySelectorAll('.slider-item')];
const buttonPrevElement = document.querySelector('.slider-button-prev');
const buttonNextElement = document.querySelector('.slider-button-next');
const bulletElements = [...document.querySelectorAll('.slider-pagination-button')];
const slidesAmount = slideElements.length;
let currentIndex = 0;

const onSlideChange = (index) => {
  const activeSlideElement = document.querySelector('.slider-item.slider-shown');
  const activeBulletElement = document.querySelector('.slider-pagination-button.slider-pagination-button-current');

  activeSlideElement.classList.remove('slider-shown');
  slideElements[index].classList.add('slider-shown');
  activeBulletElement.classList.remove('slider-pagination-button-current');
  bulletElements[index].classList.add('slider-pagination-button-current');
};

buttonPrevElement.addEventListener('click', () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slidesAmount - 1;
  }

  onSlideChange(currentIndex);
});

buttonNextElement.addEventListener('click', () => {
  currentIndex++;

  if (currentIndex === slidesAmount) {
    currentIndex = 0;
  }

  onSlideChange(currentIndex);
});

bulletElements.forEach((element, index) =>
  element.addEventListener('click', () => onSlideChange(index))
);
