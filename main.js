const button = document.querySelector('.my-projects button')
const projects = document.querySelector('.boxes')

button.addEventListener('click', function () {
  projects.classList.toggle('show')
})

/*open -menu*/
const aboutList = document.querySelector('.about-me')
const feedList = document.querySelector('.feed')

/*aside <-> main*/
const aside = document.querySelector('aside')
const main = document.querySelector('main')

aboutList.addEventListener('click', () => {
  projects.classList.remove('show')
  aboutList.classList.add('active')
  feedList.classList.remove('active')
  main.classList.remove('visible')
  aside.classList.remove('invisible')
})

feedList.addEventListener('click', () => {
  aboutList.classList.remove('active')
  feedList.classList.add('active')
  main.classList.add('visible')
  aside.classList.add('invisible')
})
