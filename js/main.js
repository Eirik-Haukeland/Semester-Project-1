const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn')
const aside = document.querySelector('aside');
const main = document.querySelector('main')

openMenuBtn.addEventListener('click', (event) => { 
  aside.hidden = false;
  //make main stopp scrolling neads to only scroll aside
})

closeMenuBtn.addEventListener('click', (event) => { 
  aside.hidden = true;
  //make main scroll again
})

document.scre