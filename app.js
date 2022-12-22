let burger = document.querySelector('.header__burger'),
  header = document.querySelector('.header'),
  button = document.querySelector('.header__button'),
  list = document.querySelector('.header__list'),
  mediaQuery = window.matchMedia("(min-width: 900px)")

burger.addEventListener('click', () => {
  header.classList.toggle('header_active')
  burger.classList.toggle('header__burger_active')
  list.classList.toggle('header__list_active')
})

function changeVisibility() {

  if (mediaQuery.matches) {
    burger.classList.remove('header__burger_active')
    burger.classList.add('header__burger_invisible')
    list.classList.remove('header__list_active')
    list.classList.add('header__list_flex')
    button.classList.add('header__button_active')

    return

  }

  burger.classList.remove('header__burger_invisible')
  list.classList.remove('header__list_active')
  list.classList.remove('header__list_flex')
  button.classList.remove('header__button_active')

}

mediaQuery.addEventListener("change", () => changeVisibility())
window.addEventListener('DOMContentLoaded', () => changeVisibility())