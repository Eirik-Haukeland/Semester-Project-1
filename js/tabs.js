const tabsContaners = document.getElementById('tabs')
const contentContainers = document.getElementById('module-tabs')

const tabList = []
tabsContaners.childNodes.forEach((Element) => {
  if (Element.tagName === 'LI') {
    tabList.push(Element)
  }
})

const contentList = []
contentContainers.childNodes.forEach((Element) => {
  if (Element.tagName === 'SECTION') {
    contentList.push(Element)
  }
})

tabList.forEach((Element) => {
  Element.addEventListener("click", () => {
    Element.childNodes.forEach(Element => {
      if (Element.tagName === 'SPAN') {
        document.location.hash = Element.innerText
      }
    })
  })
})

window.addEventListener('hashchange', (event) => {

  const hash = document.location.hash.split('%20').join(' ').split('#')[1]

  contentList.forEach((Element) => {
    if (Element.classList.contains('selected')) {
      Element.classList.remove('selected')
    } 
    if (Element.id === hash) {
      Element.classList.add('selected')
    }
  })

  tabList.forEach((Element, Index) => {
    if (Element.classList.contains('selected')) {
      Element.classList.remove('selected')
    } else if (Element.classList.contains('prev')) {
      Element.classList.remove('prev')
    }

    let parent = Element
    let PreviusIndex = Index - 1
    Element.childNodes.forEach(Element => {
      if (Element.tagName === 'SPAN' && Element.innerText === hash) {
        // document.location.hash = Element.innerText
        parent.classList.add('selected')
          if (PreviusIndex >= 0){
            tabList[PreviusIndex].classList.add('prev')
          }
      }
    })
  })
})

window.addEventListener('DOMContentLoaded', (event) => {

  const hash = document.location.hash.split('%20').join(' ').split('#')[1]

  if (hash) {
    contentList.forEach((Element) => {
      if (Element.classList.contains('selected')) {
        Element.classList.remove('selected')
      } 
      if (Element.id === hash) {
        Element.classList.add('selected')
      }
    })
  
    tabList.forEach((Element, Index) => {
      if (Element.classList.contains('selected')) {
        Element.classList.remove('selected')
      } else if (Element.classList.contains('prev')) {
        Element.classList.remove('prev')
      }
  
      let parent = Element
      let PreviusIndex = Index - 1
      Element.childNodes.forEach(Element => {
        if (Element.tagName === 'SPAN' && Element.innerText === hash) {
          // document.location.hash = Element.innerText
          parent.classList.add('selected')
            if (PreviusIndex >= 0){
              tabList[PreviusIndex].classList.add('prev')
            }
        }
      })
    })
  }

})