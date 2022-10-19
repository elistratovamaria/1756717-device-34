const userMenuLinkCartElement = document.querySelector('.user-menu-link-cart');
const popoverCartElement = document.querySelector('.popover-cart');

const onUserMenuLinkCartClick = () => {
  popoverCartElement.classList.toggle('popover-cart-open');
}

userMenuLinkCartElement.addEventListener('click', onUserMenuLinkCartClick);
