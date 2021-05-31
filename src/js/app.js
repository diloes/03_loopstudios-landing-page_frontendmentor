/* HAMBURGUER MENU */

const menu = document.querySelector('.header__hamburguer');

menu.addEventListener("click", function() {
    document.querySelector('.nav__js').classList.add('nav__hamburguer');
  });