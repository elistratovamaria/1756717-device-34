const servicesItemElements = [...document.querySelectorAll('.services-item')];
const servicesButtonElements = [...document.querySelectorAll('.services-button')];
const servicesDetailsItemElements = [...document.querySelectorAll('.services-details-item')];

const onTabChange = (index) => {
  const activeServiceElement = document.querySelector('.services-item.services-item-current');
  const activeServiceButtonElement = document.querySelector('.services-button.services-button-current');
  const activeServiceDetailsElement = document.querySelector('.services-details-item.shown');

  activeServiceElement.classList.remove('services-item-current');
  servicesItemElements[index].classList.add('services-item-current');
  activeServiceButtonElement.classList.remove('services-button-current');
  servicesButtonElements[index].classList.add('services-button-current');
  activeServiceDetailsElement.classList.remove('shown');
  servicesDetailsItemElements[index].classList.add('shown');
};

servicesItemElements.forEach((element, index) =>
  element.addEventListener('click', () => onTabChange(index))
);
