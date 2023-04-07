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


let startBtnEl = document.getElementById('startBtn')
let playCardsBtnEl = document.getElementById("playCardsBtn")
let takeCardsBtnEl = document.getElementById("takeCardsBtn")
let resetBtnEl = document.getElementById('resetBtn')
let btnEl = document.querySelectorAll('.btn')

startBtnEl.addEventListener(`click`, function() {
  shuffleDeck(startingDeck)
  handleStart()
  console.log(drawPileA,drawPileB)
  startBtnEl.disabled = true
  playCardsBtnEl.disabled = false
})
playCardsBtnEl.addEventListener(`click`, function() {
  playCards()
  renderPlayingDecks()
  renderSoldiers()
  // compareCards()
  playCardsBtnEl.disabled = true
  takeCardsBtnEl.disabled = false
  console.log(drawPileA,drawPileB,battleFieldA,battleFieldB,hostageDeck)
})
takeCardsBtnEl.addEventListener(`click`, function() {
  compareCards()
  shuffleDeck(drawPileA,drawPileB)
  takeCardsBtnEl.disabled = true
  playCardsBtnEl.disabled = false
  console.log(drawPileA,drawPileB,battleFieldA,battleFieldB,hostageDeck)
})
resetBtnEl.addEventListener(`click`, function() {

})
startBtnEl.addEventListener(`mouseover`, function() {
  startBtnEl.classList.add('hover')
})
startBtnEl.addEventListener(`mouseout`, function() {
  startBtnEl.classList.remove('hover')
})
playCardsBtnEl.addEventListener(`mouseover`, function() {
  playCardsBtnEl.classList.add('hover')
})
playCardsBtnEl.addEventListener(`mouseout`, function() {
  playCardsBtnEl.classList.remove('hover')
})
resetBtnEl.addEventListener(`mouseover`, function() {
  resetBtnEl.classList.add('hover')
})
resetBtnEl.addEventListener(`mouseout`, function() {
  resetBtnEl.classList.remove('hover')
})
takeCardsBtnEl.addEventListener(`mouseover`, function() {
  takeCardsBtnEl.classList.add('hover')
})
takeCardsBtnEl.addEventListener(`mouseout`, function() {
  takeCardsBtnEl.classList.remove('hover')
})

playCardsBtnEl.disabled = true
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
  // shuffleAndMoveDeck()
  //if both players can draw from their pile
  if (drawPileA.length !== 0 && drawPileB.length !== 0) {
    battleFieldA = drawPileA.splice(0,1)
    battleFieldB = drawPileB.splice(0,1)
    renderSoldiers()
  }
  //if B's draw pile is empty
  else if (drawPileA.length !== 0 && drawPileB.length === 0) {
    aWinsGame()
  }
  //if A's draw pile is empty
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
    // renderSoldiers()
  }
  else if (battleFieldA[0].value < battleFieldB[0].value) {
    bWinsDuel()
    // renderSoldiers()
  }
  else {
    //War!!
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
      //Double War!!
      debugger
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
        //Triple War!!
        debugger
        console.log("Ceasefire! The War is over!")
        tieGame()
      }
    }
  }
}
function aWinsDuel() {
  renderEmptySoldiers()
  console.log('A Wins Duel')
  const winnings = drawPileA.concat(battleFieldA,battleFieldB)
  drawPileA = winnings
  clearBattleField()
}
function bWinsDuel() {
  renderEmptySoldiers()
  console.log('B Wins Duel')  
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
    renderEmptySoldiers()
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
  console.log("War!")
  supplyHostages()
  renderSoldiers()
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
}
function bWinsGame() {
  startBtnEl.disabled = true
  playCardsBtnEl.disabled = true
  takeCardsBtnEl.disabled = true
}
function clearBattleField() {
  battleFieldA = []
  battleFieldB = []
}

// render functions

function renderPlayingDecks(){
  if (drawPileA.length === 0) {
    drawPileAEl.classList.remove('shadow','lighterShadow','darkerShadow','back-blue')
    drawPileAEl.classList.add('outline')
  }
  else if(drawPileA.length !== 0 && drawPileA.length < 12) {
    drawPileAEl.classList.remove('shadow','outline','darkerShadow')
    drawPileAEl.classList.add('lighterShadow','back-blue')
  }
  else if(drawPileA.length >= 6 && drawPileA.length < 24){
    drawPileAEl.classList.remove('outline','lighterShadow','darkerShadow')
    drawPileAEl.classList.add('shadow','back-blue')
  }
  else {
    drawPileAEl.classList.remove('shadow','lighterShadow','outline')
    drawPileAEl.classList.add('darkerShadow','back-blue')
  }

  if (drawPileB.length === 0) {
    drawPileBEl.classList.remove('shadow','lighterShadow','darkerShadow','back-blue')
    drawPileBEl.classList.add('outline')
  }
  else if(drawPileB.length !== 0 && drawPileB.length < 12) {
    drawPileBEl.classList.remove('shadow','outline','darkerShadow')
    drawPileBEl.classList.add('lighterShadow','back-blue')
  }
  else if(drawPileB.length >= 6 && drawPileB.length < 24){
    drawPileBEl.classList.remove('outline','lighterShadow','darkerShadow')
    drawPileBEl.classList.add('shadow','back-blue')
  }
  else {
    drawPileBEl.classList.remove('shadow','lighterShadow','outline')
    drawPileBEl.classList.add('darkerShadow','back-blue')
  }
}
function renderSoldiers(){

  if (battleFieldA.length === 1) {
    let soldierA = battleFieldA[0].title
    let soldierB = battleFieldB[0].title
    battleFieldAEl.classList.add(soldierA)
    battleFieldBEl.classList.add(soldierB)
    battleFieldAEl.classList.remove('outline','blank','back-blue')
    battleFieldBEl.classList.remove('outline','blank','back-blue')

  }
}
function renderEmptySoldiers() {

  let soldierA = battleFieldA
  let soldierB = battleFieldB
  let soldierAImage = soldierA[0].title
  let soldierBImage = soldierB[0].title
  battleFieldAEl.classList.add('outline','blank')
  battleFieldAEl.classList.remove('shadow','lighterShadow','darkerShadow','back-blue',soldierAImage)
  battleFieldBEl.classList.add('outline','blank')
  battleFieldBEl.classList.remove('shadow','lighterShadow','darkerShadow','back-blue',soldierBImage)

}
