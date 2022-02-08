/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home, #home .text,
  #about .image, #about,
  `,
  { interval: 100 }
)

//Sticky Navbar

let header = document.querySelector('header')
let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0)
})

menu.onclick = () => {
  navbar.classList.toggle('active')
}

window.onscroll = () => {
  navbar.classList.remove('active')
}

// Dark Mode
let darkmode = (document = () => '#darkmode')

darkmode.onclick = () => {
  if (darkmode.classlist.contains('bx-moon')) {
    darkmode.classList.replace('bx-moon', 'bx-sun')
    document.body.classList.add('active')
  } else {
    darkmode.classList.replace('bx-sun', 'bx-moon')
    document.body.classList.remove('active')
  }
}
