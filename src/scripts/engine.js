const emojis = [
  "👻",
  "🥰",
  "🤡",
  "😁",
  "🤭",
  "😹",
  "💩",
  "😚",
  "👻",
  "🥰",
  "🤡",
  "😁",
  "🤭",
  "😹",
  "💩",
  "😚"
]

const state = {
  view: {
    modal: document.querySelector(".modal"),
    close: document.querySelector(".close")
  }
}

let openCards = []

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1)

for(let i = 0; i < emojis.length; i++) {
  let box = document.createElement('div')
  box.className = 'item'
  box.innerHTML = shuffleEmojis[i]
  box.onclick = handleClick
  document.querySelector('.game').append(box)
}

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add('boxOpen')
    openCards.push(this)
  }

  if(openCards.length == 2) {
    setTimeout(checkMatch, 500)
  }

}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add('boxMatch')
    openCards[1].classList.add('boxMatch')
  } else {
    openCards[0].classList.remove('boxOpen')
    openCards[1].classList.remove('boxOpen')
  }

  openCards = []

  if (document.querySelectorAll('.boxMatch').length === emojis.length) {
    state.view.modal.style.display = "block"
  } 
}

state.view.close.onclick = function() {
  state.view.modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == state.view.modal) {
    state.view.modal.style.display = "none";
  }
}