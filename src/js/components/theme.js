// HTML references
const body = document.querySelector('body')
const headerImage = body.querySelector('.header-image')
const themeIcon = body.querySelector('.theme-icon')
const themeButton = document.getElementById('theme-button')
let theme = 'dark'

export default function setTheme() {
  toggleClasses()
}

const toggleClasses = () => {
  body.classList.toggle('dark')
  body.classList.toggle('light')

  theme = body.classList.contains('dark') ? 'dark' : 'light'
  setImages()
}

const setImages = () => {
  const sizeImages = (window.matchMedia("(min-width: 768px)").matches) ? 'desktop' : 'mobile'
  headerImage.src = `./assets/img/bg-${sizeImages}-${theme}.jpg`
  themeIcon.src = `./assets/img/icon-${theme}.svg`
}

// events
themeButton.addEventListener('click', setTheme)

window.addEventListener("resize", function() {
  setImages()
})
