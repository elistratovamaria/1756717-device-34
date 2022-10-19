const modalContainerElement = document.querySelector('.modal-container');
const buttonDeliveryElement = document.querySelector('.delivery-link');
const modalCloseButtonElement = document.querySelector('.modal-close-button');

const onDeliveryButtonClick = () => {
  modalContainerElement.classList.remove('modal-container-close');
  buttonDeliveryElement.removeEventListener('click', onDeliveryButtonClick);
  modalCloseButtonElement.addEventListener('click', onModalCloseButtonClick);
  document.addEventListener('keydown', onEscKeyDown);
};

const onModalCloseButtonClick = () => {
  modalContainerElement.classList.add('modal-container-close');
  buttonDeliveryElement.addEventListener('click', onDeliveryButtonClick);
  modalCloseButtonElement.removeEventListener('click', onModalCloseButtonClick);
  document.removeEventListener('keydown', onEscKeyDown);
};

const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const onEscKeyDown = () => {
  if (isEscapeKey) {
    modalContainerElement.classList.add('modal-container-close');
    buttonDeliveryElement.addEventListener('click', onDeliveryButtonClick);
    modalCloseButtonElement.removeEventListener('click', onModalCloseButtonClick);
    document.removeEventListener('keydown', onEscKeyDown);
  }
};

buttonDeliveryElement.addEventListener('click', onDeliveryButtonClick);
