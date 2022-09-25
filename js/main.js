const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn')
const aside = document.querySelector('aside');
const main = document.querySelector('main')
const mainMenu = document.querySelector('#menu')

openMenuBtn.addEventListener('click', (event) => { 
  aside.hidden = false;
})

closeMenuBtn.addEventListener('click', (event) => { 
  aside.hidden = true;
})

mainMenu.childNodes.forEach((Element, Index) => {
  if (Element.tagName === 'UL' && Element.classList.contains('sub-menu')) {
    Element.childNodes.forEach((Element) => {
      if (Element.tagName === 'LI') {
        Element.addEventListener('click', (event) => {
          mainMenu.childNodes[Index].childNodes.forEach((Element) => {
            if (Element.tagName === 'LI' && Element.classList.contains('open-page')) {
              Element.classList.remove('open-page')
            }
          })
          Element.classList.add('open-page')
        })
      }
    })
}})

let urlLocation = document.location.href.split('/').pop().split('%20').join(' ').split('#')

document.addEventListener('DOMContentLoaded', (event) => {
  if (urlLocation[1]) {
    mainMenu.childNodes.forEach((Element, Index) => {
      let PreviusIndex = Index - 2
      if (Element.tagName ==='UL' && mainMenu.childNodes[PreviusIndex].classList.contains('open-page')) {
        Element.childNodes.forEach((Element) => {
          if (Element.tagName === 'LI' && Element.classList.contains('open-page')) {
            Element.classList.remove('open-page')
          } else if (Element.tagName === 'LI' && Element.textContent === urlLocation[1]) {
            Element.classList.add('open-page')
          }
        })
      }
    })
  }
})

window.addEventListener('resize', (event) => {
  if (window.innerWidth >= 900) {
    aside.hidden = false
  } else {
    aside.hidden = true
  }
})

window.addEventListener('DOMContentLoaded', (event) => {
  if (window.innerWidth >= 900) {
    aside.hidden = false
  } else {
    aside.hidden = true
  }
})