function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const ranked = document.querySelectorAll('ul.ranked-list li')

  for(let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n
  }
}

function deepestChild() {
  let current = document.getElementById('grand-node')
  let next = current.children[0]

  while(next) {
    current = next
    next = current.children[0]
  }
  return current
}
