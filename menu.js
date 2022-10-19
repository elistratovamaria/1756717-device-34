const mainMenuButtonElement = document.querySelector('.main-menu-button');

const onMainMenuButtonClick = () => {
  mainMenuButtonElement.classList.toggle('main-menu-button-active');
};

mainMenuButtonElement.addEventListener('click', onMainMenuButtonClick);
