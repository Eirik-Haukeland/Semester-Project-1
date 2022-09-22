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

tabList.forEach((Element, Index) => {
  Element.addEventListener("click", (event) => {

    tabList.forEach((Element,) => {
      if (Element.classList.contains('selected')) {
        Element.classList.remove('selected')
      } else if (Element.classList.contains('prev')) {
        Element.classList.remove('prev')
      }
    })

    let PreviusIndex = Index - 1
    Element.classList.add('selected')
    if (PreviusIndex >= 0){
      tabList[PreviusIndex].classList.add('prev')
    }

    btn = Element;
    console.log(btn.innerText)
    console.log(btn)

    contentList.forEach((Element) => {
      if (Element.classList.contains('selected')) {
        Element.classList.remove('selected')
      } 
      if (Element.id === btn.innerText) {
        Element.classList.add('selected')
      }
    })
  })
})