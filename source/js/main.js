const navbar = document.querySelector('.navbar');
const navbarButton = document.querySelector('.navbar__button');

let isActive = false;

removeNoJs();

navbarButton.addEventListener('click', () => {
  if (navbar.classList.contains('navbar--closed')) {
    navbar.classList.remove('navbar--closed');
  } else {
    navbar.classList.add('navbar--closed');
  }
});

function removeNoJs() {
  document.querySelector('.page__body--nojs').classList.remove('page__body--nojs');
  document.querySelector('.main-header--nojs').classList.remove('main-header--nojs');
  document.querySelector('.main-header__logo--nojs').classList.remove('main-header__logo--nojs');
  document.querySelector('.navbar--nojs').classList.remove('navbar--nojs');
}
