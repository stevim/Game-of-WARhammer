let deck1 = []
let deck2 = []
let deck3 = []
let deck4 = []
let deck5 = []
let deck6 = []
let deck7 = []
let deck8 = []
let startingDeck = []

let deck1El = document.getElementById('deck1')
let deck2El = document.getElementById('deck2')
let deck3El = document.getElementById('deck3')
let deck4El = document.getElementById('deck4')
let deck5El = document.getElementById('deck5')
let deck6El = document.getElementById('deck6')
let deck7El = document.getElementById('deck7')
let deck8El = document.getElementById('deck8')

document.getElementById(`startBtn`).addEventListener(`click`, function() {
  shuffleDeck(startingDeck)
  handleStart()
  console.log(deck1)
  console.log(deck5) 
})
document.getElementById('nextTurnBtn').addEventListener(`click`, function () {
  playCards()
  compareCards()
  console.log(deck2)
  console.log(deck6)
  
  
})
document.getElementById('resetBtn').addEventListener(`click`, function() {
  handleReset()
})

function init() {
  startingDeck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
  }

init()

function shuffleDeck(arr) {
  let m = arr.length, t, i
  while(m) {
    i = Math.floor(Math.random()*m--)
    t = arr[m]
    arr[m] = arr[i]
    arr[i] = t
  }
  return arr
}

function handleStart() {
  // while (startingDeck.length > 26) {
  //   let randIdx = Math.floor(Math.random()*startingDeck.length)
  //   let cardPicked = startingDeck.splice(randIdx, 1)
  //   deck1.push(cardPicked)
  // }
  // while (startingDeck.length > 0) {
  //   let randIdx = Math.floor(Math.random()*startingDeck.length)
  //   let cardPicked = startingDeck.splice(randIdx, 1)
  //   deck5.push(cardPicked)
  // }
  deck1 = startingDeck.splice(0,26)
  deck5 = startingDeck.splice(0,26)
}

function playCards() {
  if (deck1.length !== 0 && deck5.length !== 0) {
    deck2 = deck1.splice(0,1)
    deck6 = deck5.splice(0,1)
  } else if (deck1.length === 0 && deck5.length !== 0) {
    // render message playerB wins
  } else if (deck1.length !== 0 || deck5.length === 0) {
    // render message playerA wins
  } else {
    // render message tie game
  }
}
function compareCards() {
  
  // if (deck2[0] > deck6[0])
}


function handleReset() {

}