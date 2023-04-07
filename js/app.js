let drawPileA = []
let battleFieldA = []
let drawPileB = []
let battleFieldB = []
let hostageDeck = []

let startingDeck = []

let drawPileAEl = document.getElementById('drawPileA')
let battleFieldAEl = document.getElementById('battleFieldA')
let drawPileBEl = document.getElementById('drawPileB')
let battleFieldBEl = document.getElementById('battleFieldB')
let hostageDeckEl = document.getElementById('hostageDeck')
let messageEl = document.getElementById('message')

let startBtnEl = document.getElementById('startBtn')
let playCardsBtnEl = document.getElementById("playCardsBtn")
let takeCardsBtnEl = document.getElementById("takeCardsBtn")
let resetBtnEl = document.getElementById('resetBtn')
let btnEl = document.querySelectorAll('.btn')

//buttons
startBtnEl.addEventListener("click", function() {
  shuffleDeck(startingDeck)
  handleStart()
  startBtnEl.classList.remove("hover")
  startBtnEl.disabled = true
  playCardsBtnEl.disabled = false
})
playCardsBtnEl.addEventListener("click", function() {
  playCards()
  renderSoldiers()
  playCardsBtnEl.classList.remove('hover')
  playCardsBtnEl.disabled = true
  takeCardsBtnEl.disabled = false
})
takeCardsBtnEl.addEventListener("click", function() {
  compareCards()
  shuffleDeck(drawPileA,drawPileB)
  takeCardsBtnEl.classList.remove('hover')
  takeCardsBtnEl.disabled = true
  playCardsBtnEl.disabled = false
})
resetBtnEl.addEventListener("click", function() {
  init()
  if (battleFieldA.length !== 0 && battleFieldB.length !== 0) {
    renderEmptySoldiers()
  }
  resetGame()
  playCardsBtnEl.classList.remove("hover","back")
  takeCardsBtnEl.classList.remove("hover","back")
  startBtnEl.disabled = false
  playCardsBtnEl.disabled = true
  takeCardsBtnEl.disabled = true
})
startBtnEl.addEventListener("mouseover", function() {
  startBtnEl.classList.add("hover")
})
playCardsBtnEl.addEventListener("mouseover", function() {
  playCardsBtnEl.classList.add("hover")
})
takeCardsBtnEl.addEventListener("mouseover", function() {
  takeCardsBtnEl.classList.add("hover")
})
resetBtnEl.addEventListener("mouseover", function() {
  resetBtnEl.classList.add("hover")
})
startBtnEl.addEventListener("mouseout", function() {
  startBtnEl.classList.remove("hover")
})
playCardsBtnEl.addEventListener("mouseout", function() {
  playCardsBtnEl.classList.remove("hover")
})
takeCardsBtnEl.addEventListener("mouseout", function() {
  takeCardsBtnEl.classList.remove("hover")
})
resetBtnEl.addEventListener("mouseout", function() {
  resetBtnEl.classList.remove("hover")
})

playCardsBtnEl.disabled = true
takeCardsBtnEl.disabled = true
init()
function init() {
  startingDeck = [
    {title: "dA", value: 1},
    {title: "sA", value: 1},
    {title: "hA", value: 1},
    {title: "cA", value: 1},
    {title: "d02", value: 2},
    {title: "s02", value: 2},
    {title: "h02", value: 2},
    {title: "c02", value: 2},
    {title: "d03", value: 3},
    {title: "s03", value: 3},
    {title: "h03", value: 3},
    {title: "c03", value: 3},
    {title: "d04", value: 4},
    {title: "s04", value: 4},
    {title: "h04", value: 4},
    {title: "c04", value: 4},
    {title: "d05", value: 5},
    {title: "s05", value: 5},
    {title: "h05", value: 5},
    {title: "c05", value: 5},
    {title: "d06", value: 6},
    {title: "s06", value: 6},
    {title: "h06", value: 6},
    {title: "c06", value: 6},
    {title: "d07", value: 7},
    {title: "s07", value: 7},
    {title: "h07", value: 7},
    {title: "c07", value: 7},
    {title: "d08", value: 8},
    {title: "s08", value: 8},
    {title: "h08", value: 8},
    {title: "c08", value: 8},
    {title: "d09", value: 9},
    {title: "s09", value: 9},
    {title: "h09", value: 9},
    {title: "c09", value: 9},
    {title: "d10", value: 10},
    {title: "s10", value: 10},
    {title: "h10", value: 10},
    {title: "c10", value: 10},
    {title: "dJ", value: 11},
    {title: "sJ", value: 11},
    {title: "hJ", value: 11},
    {title: "cJ", value: 11},
    {title: "dQ", value: 12},
    {title: "sQ", value: 12},
    {title: "hQ", value: 12},
    {title: "cQ", value: 12},
    {title: "dK", value: 13},
    {title: "sK", value: 13},
    {title: "hK", value: 13},
    {title: "cK", value: 13}, 
  ]
}
//on click functions
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
  drawPileA = startingDeck.splice(0,26)
  drawPileB = startingDeck.splice(0,26)
}
function playCards() {
  if (drawPileA.length !== 0 && drawPileB.length !== 0) {
    battleFieldA = drawPileA.splice(0,1)
    battleFieldB = drawPileB.splice(0,1)
    renderSoldiers()
  }
  else if (drawPileA.length !== 0 && drawPileB.length === 0) {
    aWinsGame()
  }
  else if (drawPileA.length === 0 && drawPileB.length !== 0) {
    bWinsGame()
  }
  else {
    tieGame()
  }
}
function compareCards() {
  if (battleFieldA[0].value > battleFieldB[0].value) {
    aWinsDuel()
    messageEl.innerHTML = "You won this battle!"
  }
  else if (battleFieldA[0].value < battleFieldB[0].value) {
    bWinsDuel()
    messageEl.innerHTML = "You lost this battle!"
  }
  else {
    messageEl.innerHTML = "War!"
    war()
    if (battleFieldA[0].value > battleFieldB[0].value) {
      let allHostages = drawPileA.concat(hostageDeck)
      drawPileA = allHostages
      hostageDeck = []
      aWinsDuel()
    }
    else if (battleFieldA[0].value < battleFieldB[0].value) {
      let allHostages = drawPileB.concat(hostageDeck)
      drawPileB = allHostages
      hostageDeck = []
      bWinsDuel()
    }
    else {
      debugger
      messageEl.innerHTML = "Double War!"
      war()
      if(battleFieldA[0].value > battleFieldB[0].value) {
        let allHostages = drawPileA.concat(hostageDeck)
        drawPileA = allHostages
        hostageDeck = []
        aWinsDuel()
      }
      else if (battleFieldA[0].value < battleFieldB[0].value) {
        let allHostages = drawPileB.concat(hostageDeck)
        drawPileB = allHostages
        hostageDeck = []
        bWinsDuel()
      }
      else {
        messageEl.innerHTML = "Triple War!"
        debugger
        tieGame()
      }
    }
  }
}
function aWinsDuel() {
  renderEmptySoldiers()
  const winnings = drawPileA.concat(battleFieldA,battleFieldB)
  drawPileA = winnings
  clearBattleField()
}
function bWinsDuel() {
  renderEmptySoldiers()
  const winnings = drawPileB.concat(battleFieldA,battleFieldB)
  drawPileB = winnings
  clearBattleField()
}
function supplyHostages() {
  if (drawPileA.length >= 3 && drawPileB.length >= 3) {
    let hostagesA = drawPileA.splice(0,3)
    let hostagesB = drawPileB.splice(0,3)
    let allHostages = hostageDeck.concat(hostagesA,hostagesB,battleFieldA,battleFieldB)
    hostageDeck = allHostages
    clearBattleField()
  } 
  else if (drawPileA.length >= 3 && drawPileB.length < 3){
    aWinsGame()
  }
  else if (drawPileA.length < 3 && drawPileB.length >= 3) {
    bWinsGame()
  } 
  else {
    if (drawPileA.length > drawPileB.length) {
      aWinsGame()
    }
    else if (drawPileA.length < drawPileB.length) {
      bWinsGame()
    }
    else {
      tieGame()
    }
  }
}
function war() {
  renderEmptySoldiers()
  supplyHostages()
  playCards()
}
function tieGame() {
  startBtnEl.disabled = true
  playCardsBtnEl.disabled = true
  takeCardsBtnEl.disabled = true
}
function aWinsGame() {
  startBtnEl.disabled = true
  playCardsBtnEl.disabled = true
  takeCardsBtnEl.disabled = true
  messageEl.innerHTML = "Congratulions! You won the War!"
}
function bWinsGame() {
  startBtnEl.disabled = true
  playCardsBtnEl.disabled = true
  takeCardsBtnEl.disabled = true
  messageEl.innerHTML = "Better luck next time!"
}
function clearBattleField() {
  battleFieldA = []
  battleFieldB = []
}
function resetGame() {
  drawPileA = []
  drawPileB = []
  battleFieldA = []
  battleFieldB = []
  hostageDeck = []
  messageEl.innerHTML = "Welcome"
}

// render functions

function renderSoldiers(){
  if (battleFieldA.length === 1) {
    let soldierA = battleFieldA[0].title
    let soldierB = battleFieldB[0].title
    battleFieldAEl.classList.add(soldierA,"animate__flipInY")
    battleFieldBEl.classList.add(soldierB,"animate__flipInY")
    battleFieldAEl.classList.remove('back')
    battleFieldBEl.classList.remove('back')
  }
}
function renderEmptySoldiers() {
  let soldierA = battleFieldA
  let soldierB = battleFieldB
  let soldierAImage = soldierA[0].title
  let soldierBImage = soldierB[0].title
  battleFieldAEl.classList.add('back')
  battleFieldAEl.classList.remove('shadow','lighterShadow','darkerShadow','animate__flipInY',soldierAImage)
  battleFieldBEl.classList.add('back')
  battleFieldBEl.classList.remove('shadow','lighterShadow','darkerShadow','animate__flipInY',soldierBImage)
}