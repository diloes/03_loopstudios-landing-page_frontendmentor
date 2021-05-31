/* HAMBURGUER MENU */

const menu = document.querySelector('.header__hamburguer');

menu.addEventListener("click", function() {
    document.querySelector('.nav__js').classList.add('nav__hamburguer');

    const aspa = document.querySelector('.logo__cerrar');
    aspa.addEventListener('click', () => {
        document.querySelector('.nav__js').classList.remove('nav__hamburguer');
    })

  });