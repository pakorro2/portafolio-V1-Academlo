const container = document.getElementById('menu')
const menu = document.querySelector('.menu__content')

container.addEventListener('click', function (e) {
  if (e.target.matches('.menu--open')) {
    menu.classList.add('show--menu')
  }

  if (e.target.matches('.menu--close')) {
    menu.classList.remove('show--menu')
  }

  if (e.target.matches('.menu__link')) {
    menu.classList.remove('show--menu')
  }

})