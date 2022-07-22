const button = document.querySelector('.my-projects button')
const projects = document.querySelector('.boxes')

button.addEventListener('click', function () {
  projects.classList.toggle('show')
})

/*open -menu*/
const openMenu = document.querySelector('.open-menu')
const nav = document.querySelector('nav')
const aboutList = document.querySelector('.about-me')
const span = document.querySelector('.about-me span')
const feedList = document.querySelector('.feed')

openMenu.addEventListener('click', () => {
  nav.classList.toggle('open')
})

/*aside <-> main*/
const aside = document.querySelector('aside')
const main = document.querySelector('main')

aboutList.addEventListener('click', () => {
  main.classList.remove('visible')
  aside.classList.remove('invisible')
  nav.classList.remove('open')
  projects.classList.remove('show')
})

feedList.addEventListener('click', () => {
  main.classList.add('visible')
  aside.classList.add('invisible')
  nav.classList.remove('open')
})
