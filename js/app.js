// variables
let playingDeckA = []
let playedCardA = []
let hostageDeckA = []
let collectionDeckA = []
let playingDeckB = []
let playedCardB = []
let hostageDeckB = []
let collectionDeckB = []

let startingDeck = []
// cached references
let playingDeckAEl = document.getElementById('playingDeckA')
let playedCardAEl = document.getElementById('playedCardA')
let hostageDeckAEl = document.getElementById('hostageDeckA')
let collectionDeckAEl = document.getElementById('collectionDeckA')
let playingDeckBEl = document.getElementById('playingDeckB')
let playedCardBEl = document.getElementById('playedCardB')
let hostageDeckBEl = document.getElementById('hostageDeckB')
let collectionDeckBEl = document.getElementById('collectionDeckB')

let startBtnEl = document.getElementById('startBtn')
let nextTurnBtnEl = document.getElementById('nextTurnBtn')
let resetBtnEl = document.getElementById('resetBtn')

// Buttons
document.getElementById('startBtn').addEventListener(`click`, function() {
  shuffleDeck(startingDeck)
  handleStart()
  startBtnEl.disabled = true
  nextTurnBtnEl.disabled = false
  console.log(playingDeckA)
  console.log(playingDeckB)
  renderPlayingDeckA()
  renderPlayingDeckB()
})
document.getElementById('nextTurnBtn').addEventListener(`click`, function() {
  playCards()
  compareCards()
  console.log(playingDeckA)
  console.log(playingDeckB)
  console.log(playedCardA)
  console.log(playedCardB)
  console.log(hostageDeckA)
  console.log(hostageDeckB)
  console.log(collectionDeckA)
  console.log(collectionDeckB)
  renderEmptySoldier()
})
document.getElementById('resetBtn').addEventListener(`click`, function() {
  handleReset()
})
// Runs on start
nextTurnBtnEl.disabled = true
init()
// functions
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
  playingDeckA = startingDeck.splice(0,26)
  playingDeckB = startingDeck.splice(0,26)
}
function compareCards() {
  if (playedCardA[0].value > playedCardB[0].value) {
    playerAWins()
    console.log(`Player A Wins!`)
  } 
  else if (playedCardA[0].value < playedCardB[0].value) {
    playerBWins()
    console.log(`Player B Wins!`)
  } 
  else {
// War!
    console.log("War!")
    supplyHostages()
    playCards()
    if (playedCardA.length === 0 && playedCardB.length === 1) {
      
      bWinsGame()
    } else if (playedCardA.length === 1 && playedCardB.length === 0) {
      
      aWinsGame()
    } 
    else if (playedCardA[0].value > playedCardB[0].value) {
    playerAWins()
    console.log(`Player A Wins War!`)
    winHostagesA()
    } 
    else if (playedCardA[0].value < playedCardB[0].value) {
    playerBWins()
    console.log(`Player B Wins War!`)
    winHostagesB()
    } 
    else { 
      // Double War!
      console.log("Double War!")
      supplyDoubleWarHostages()
      playCards()
      
      if (playedCardA[0].value > playedCardB[0].value) {
        playerAWins()
        console.log("Player A Wins Double War!")
        winDoubleHostagesA()
        } 
        else if (playedCardA[0].value < playedCardB[0].value) {
        playerBWins()
        console.log("Player B Wins Double War!")
        winDoubleHostagesB()
        } 
        else {
          // Triple War aka Tie
        }
      }
  }
}
function handleReset() {
  playingDeckA = []
  playedCardA = []
  hostageDeckA = []
  collectionDeckA = []
  playingDeckB = []
  playedCardB = []
  hostageDeckB = []
  collectionDeckB = []
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
  nextTurnBtnEl.disabled = true
  startBtnEl.disabled = false
  renderEmptySoldier()
  renderEmptyCollections()
}
function playCards() {
  if (playingDeckA.length !== 0 && playingDeckB.length !== 0) {
  createAndPlayPlayedCards()
  } 
  else if (playingDeckA.length !== 0 && playingDeckB.length === 0) {
    if (collectionDeckB.length !== 0) {
      shuffleDeck(collectionDeckB)
      moveDeckB()
      createAndPlayPlayedCards()
    } 
    else {
      aWinsGame()
    }
  } 
  else if (playingDeckA.length === 0 && playingDeckB.length !== 0) {
    if (collectionDeckA.length !== 0) {
      shuffleDeck(collectionDeckA)
      moveDeckA()
      createAndPlayPlayedCards()
    } 
    else {
      bWinsGame()
    }
  } 
  else if (playingDeckA.length === 0 && playingDeckB.length === 0) {
    if (collectionDeckA.length !== 0 && collectionDeckB.length !== 0) {
      shuffleDeck(collectionDeckA)
      shuffleDeck(collectionDeckB)
      moveDeckA()
      moveDeckB()
      createAndPlayPlayedCards()
    } else if (collectionDeckA.length === 0 && collectionDeckB.length === 0) {
      returnHostagesAndCardPlayed()
      createAndPlayPlayedCards()
      compareCards()
      if (playingDeckA.length === playingDeckB.length) {
        console.log("It's another War, but no one has enough cards to play, take them back! Since you both have the same number of cards, go again!")
      } 
      else if (playingDeckA.length > playingDeckB.length) {
        aWinsGame()
      } 
      else if (playingDeckB.length > playingDeckA.length) {
        bWinsGame()
      }
    } 
    else if (collectionDeckA.length !== 0 && collectionDeckB.length === 0) {
      aWinsGame()
    } 
    else if (collectionDeckA.length === 0 && collectionDeckB.length !== 0) {
      bWinsGame()
    }
  }
}
function aWinsGame() {
  console.log("A Wins the Game!") 
  nextTurnBtnEl.disabled = true
}
function bWinsGame() {
  console.log("B Wins the Game!")
  nextTurnBtnEl.disabled = true
}
function supplyHostages() {
  if (playingDeckA.length >= 3 && playingDeckB.length >= 3) {
    moveHostages()
  } 
  else if (playingDeckA.length < 3 && playingDeckB.length >= 3) {
    shuffleDeck(collectionDeckA)
    moveDeckA()
    moveHostages()
    if (playedCardA.length === 1 && hostageDeckA.length === 4) {
      console.log("Continue!")
    } else {
      aWinsGame()
    }
  } 
  else if (playingDeckA.length >= 3 && playingDeckB.length < 3) {
    shuffleDeck(collectionDeckB)
    moveDeckB()
    moveHostages()
    createAndPlayPlayedCards()
    if (playedCardB.length === 1 && hostageDeckB.length === 4) {
      console.log("Continue!")
    } 
    else {
      bWinsGame()
    }
  } 
  else if (playingDeckA.length < 3 && playingDeckB.length < 3) {
    shuffleDeck(collectionDeckA)
    shuffleDeck(collectionDeckB)
    moveDeckA()
    moveDeckB()
    moveHostages()
    createAndPlayPlayedCards()
    if ((playedCardA.length === 1 && hostageDeckA.length === 4) && (playedCardB.length === 1 && hostageDeckB.length === 4)) {
      console.log("Continue!")
    } 
    else if ((playedCardA.length === 1 && hostageDeckA.length === 4) && (playedCardB.length !== 1 || hostageDeckB.length !== 4)) {
      aWinsGame()
    } 
    else if ((playedCardA.length !== 1 || hostageDeckA.length !== 4) && (playedCardB.length === 1 && hostageDeckB.length === 4)) {
      bWinsGame()
    } 
    else {
      returnHostagesAndCardPlayed()
      createAndPlayPlayedCards()
      compareCards()
    }
  }
}
function supplyDoubleWarHostages () {
  if (playingDeckA.length >= 6 && playingDeckB.length >= 6) {
    moveHostages()
    createAndPlayPlayedCards()
  } 
  else if (playingDeckA.length < 6 && playingDeckB.length >= 6) {
    shuffleDeck(collectionDeckA)
    moveDeckA()
    moveHostages()
    createAndPlayPlayedCards()
    if (playedCardA.length === 1 && hostageDeckA.length === 8) {
      console.log("Continue!")
    } else {
      aWinsGame()
    }
  } 
  else if (playingDeckA.length >= 6 && playingDeckB.length < 6) {
    shuffleDeck(collectionDeckB)
    moveDeckB()
    moveHostages()
    createAndPlayPlayedCards()
    if (playedCardB.length === 1 && hostageDeckB.length === 8) {
      console.log("Continue!")
    } 
    else {
      bWinsGame()
    }
  } 
  else if (playingDeckA.length < 6 && playingDeckB.length < 6) {
    shuffleDeck(collectionDeckA)
    shuffleDeck(collectionDeckB)
    moveDeckA()
    moveDeckB()
    moveHostages()
    createAndPlayPlayedCards()
    if ((playedCardA.length === 1 && hostageDeckA.length === 8) && (playedCardB.length === 1 && hostageDeckB.length === 8)) {
      console.log("Continue!")
    } 
    else if ((playedCardA.length === 1 && hostageDeckA.length === 8) && (playedCardB.length !== 1 || hostageDeckB.length !== 8)) {
      aWinsGame()
    } 
    else if ((playedCardA.length !== 1 || hostageDeckA.length !== 8) && (playedCardB.length === 1 && hostageDeckB.length === 8)) {
      bWinsGame()
    } 
    else {
      returnHostagesAndCardPlayed()
      createAndPlayPlayedCards()
      compareCards()
    }
  }
}
function playerAWins() {
  const cardA = playedCardA.pop()
  const cardB = playedCardB.pop()
  collectionDeckA.push(cardA,cardB)
}
function playerBWins() {
  const cardA = playedCardA.pop()
  const cardB = playedCardB.pop()
  collectionDeckB.push(cardA,cardB)
}
// functions that move cards
function winHostagesA() {
  collectionDeckA.push(hostageDeckA[0],hostageDeckA[1],hostageDeckA[2],hostageDeckA[3],hostageDeckB[0],hostageDeckB[1],hostageDeckB[2],hostageDeckB[3])
  hostageDeckA = []
  hostageDeckB = []
  render()
}
function winHostagesB() {
  collectionDeckB.push(hostageDeckA[0],hostageDeckA[1],hostageDeckA[2],hostageDeckA[3],hostageDeckB[0],hostageDeckB[1],hostageDeckB[2],hostageDeckB[3])
  hostageDeckA = []
  hostageDeckB = []
  render()
}
function winDoubleHostagesA() {
  const hostagesA = hostageDeckA
  const hostagesB = hostageDeckB
  collectionDeckA.push(hostagesA[0],hostagesA[1],hostagesA[2],hostagesA[3],hostagesA[4],hostagesA[5],hostagesA[6],hostagesA[7],hostagesB[0],hostagesB[1],hostagesB[2],hostagesB[3],hostagesB[4],hostagesB[5],hostagesB[6],hostagesB[7])
  hostageDeckA = []
  hostageDeckB = []
  render()
}
function winDoubleHostagesB() {
  const hostagesA = hostageDeckA
  const hostagesB = hostageDeckB
  collectionDeckB.push(hostagesA[0],hostagesA[1],hostagesA[2],hostagesA[3],hostagesA[4],hostagesA[5],hostagesA[6],hostagesA[7],hostagesB[0],hostagesB[1],hostagesB[2],hostagesB[3],hostagesB[4],hostagesB[5],hostagesB[6],hostagesB[7])
  hostageDeckA = []
  hostageDeckB = []
  render()
}
function createAndPlayPlayedCards() {
  const cardA = playingDeckA.shift()
  const cardB = playingDeckB.shift()
  playedCardA.push(cardA)
  playedCardB.push(cardB)
  render()
}
function returnHostagesAndCardPlayed() {
  const hostagesA = hostageDeckA
  const hostagesB = hostageDeckB
  const cardA = playedCardA.pop()
  const cardB = playedCardB.pop()
  playingDeckA.push(hostagesA[0],hostagesA[1],hostagesA[2],cardA)
  playingDeckB.push(hostagesB[0],hostagesB[1],hostagesB[2],cardB)
  if (hostagesA.length >= 5) {
    playingDeckA.push(hostagesA[3],hostagesA[4],hostagesA[5],)
    playingDeckB.push(hostagesB[3],hostagesB[4],hostagesB[5],)
  }
  render()
}
function moveDeckA() {
  playingDeckA = collectionDeckA
  collectionDeckA = []
  playingDeckA.forEach(function(object) {
    if (playingDeckA[object] === {}) {
      playingDeckA.splice([object], 1)
    }
  })
  render()
}
function moveDeckB() {
  playingDeckB = collectionDeckB
  collectionDeckB = []
  playingDeckB.forEach(function(object) {
    if (playingDeckB[object] === {}) {
      playingDeckB.splice([object], 1)
    }
  })
  render()
}
function moveHostages(){
const hostagesA = playingDeckA.splice(0,3)
const hostagesB = playingDeckB.splice(0,3)
const cardA = playedCardA.pop()
const cardB = playedCardB.pop()
hostageDeckA.push(hostagesA[0],hostagesA[1],hostagesA[2])
hostageDeckA.push(cardA)
hostageDeckB.push(hostagesB[0],hostagesB[1],hostagesB[2],)
hostageDeckB.push(cardB)
render()
}

// Rendering

function render(cardPicked) {
  renderPlayingDeckA()
  renderPlayingDeckB()
  renderPlayedCardA()
  renderPlayedCardB()
  renderHostageDeckA()
  renderHostageDeckB()
  renderCollectionDeckA()
  renderCollectionDeckB()
}
function renderPlayingDeckA() {
  if (playingDeckA.length === 0) {
    playingDeckAEl.classList.remove('shadow','lighterShadow','darkerShadow','back-blue')
    playingDeckAEl.classList.add('outline')
  }
  else if(playingDeckA.length !== 0 && playingDeckA.length < 12) {
    playingDeckAEl.classList.remove('shadow','outline','darkerShadow')
    playingDeckAEl.classList.add('lighterShadow','back-blue')
  }
  else if(playingDeckA.length >= 6 && playingDeckA.length < 24){
    playingDeckAEl.classList.remove('outline','lighterShadow','darkerShadow')
    playingDeckAEl.classList.add('shadow','back-blue')
  }
  else if(playingDeckA.length >= 6 && playingDeckA.length < 36){
    playingDeckAEl.classList.remove('shadow','lighterShadow','outline')
    playingDeckAEl.classList.add('darkerShadow','back-blue')
  }
}
function renderPlayingDeckB() {
  if (playingDeckB.length === 0) {
    playingDeckBEl.classList.remove('shadow','lighterShadow','darkerShadow','back-blue')
    playingDeckBEl.classList.add('outline')
  }
  else if(playingDeckB.length !== 0 && playingDeckB.length < 12) {
    playingDeckBEl.classList.remove('shadow','outline','darkerShadow')
    playingDeckBEl.classList.add('lighterShadow','back-blue')
  }
  else if(playingDeckB.length >= 6 && playingDeckB.length < 24){
    playingDeckBEl.classList.remove('outline','lighterShadow','darkerShadow')
    playingDeckBEl.classList.add('shadow','back-blue')
  }
  else if(playingDeckB.length >= 6 && playingDeckB.length < 36){
    playingDeckBEl.classList.remove('shadow','lighterShadow','outline')
    playingDeckBEl.classList.add('darkerShadow','back-blue')
  }
}
function renderPlayedCardA() {
  if (playedCardA.length === 0) {
    playedCardAEl.classList.remove('shadow','lighterShadow','darkerShadow','back-blue','back-blue')
    playedCardAEl.classList.add('outline')
  }
  else if (playedCardA.length === 1) {
    playedCardAEl.classList.remove('outline')
  }
  else if(playedCardA.length !== 0 && playedCardA.length < 12) {
    playedCardAEl.classList.remove('shadow','outline','darkerShadow')
    playedCardAEl.classList.add('lighterShadow','back-blue')
  }
  else if(playedCardA.length >= 6 && playedCardA.length < 24){
    playedCardAEl.classList.remove('outline','lighterShadow','darkerShadow')
    playedCardAEl.classList.add('shadow','back-blue')
  }
  else if(playedCardA.length >= 6 && playedCardA.length < 36){
    playedCardAEl.classList.remove('shadow','lighterShadow','outline')
    playedCardAEl.classList.add('darkerShadow','back-blue')
  }
}
function renderPlayedCardB() {
  if (playedCardB.length === 0) {
    playedCardBEl.classList.remove('shadow','lighterShadow','darkerShadow','back-blue')
    playedCardBEl.classList.add('outline')
  }
  else if (playedCardB.length === 1) {
    playedCardBEl.classList.remove('outline')
  }
  else if(playedCardB.length !== 0 && playedCardB.length < 12) {
    playedCardBEl.classList.remove('shadow','outline','darkerShadow')
    playedCardBEl.classList.add('lighterShadow','back-blue')
  }
  else if(playedCardB.length >= 6 && playedCardB.length < 24){
    playedCardBEl.classList.remove('outline','lighterShadow','darkerShadow')
    playedCardBEl.classList.add('shadow','back-blue')
  }
  else if(playedCardB.length >= 6 && playedCardB.length < 36){
    playedCardBEl.classList.remove('shadow','lighterShadow','outline')
    playedCardBEl.classList.add('darkerShadow','back-blue')
  }
}
function renderHostageDeckA() {
  if (hostageDeckA.length === 0) {
    hostageDeckAEl.classList.remove('shadow','lighterShadow','darkerShadow','back-blue')
    hostageDeckAEl.classList.add('outline')
  }
  else if(hostageDeckA.length !== 0 && hostageDeckA.length < 12) {
    hostageDeckAEl.classList.remove('shadow','outline','darkerShadow')
    hostageDeckAEl.classList.add('lighterShadow','back-blue')
  }
  else if(hostageDeckA.length >= 6 && hostageDeckA.length < 24){
    hostageDeckAEl.classList.remove('outline','lighterShadow','darkerShadow')
    hostageDeckAEl.classList.add('shadow','back-blue')
  }
  else if(hostageDeckA.length >= 6 && hostageDeckA.length < 36){
    hostageDeckAEl.classList.remove('shadow','lighterShadow','outline')
    hostageDeckAEl.classList.add('darkerShadow','back-blue')
  }
}
function renderHostageDeckB() {
  if (hostageDeckB.length === 0) {
    hostageDeckBEl.classList.remove('shadow','lighterShadow','darkerShadow','back-blue')
    hostageDeckBEl.classList.add('outline')
  }
  else if(hostageDeckB.length !== 0 && hostageDeckB.length < 12) {
    hostageDeckBEl.classList.remove('shadow','outline','darkerShadow')
    hostageDeckBEl.classList.add('lighterShadow','back-blue')
  }
  else if(hostageDeckB.length >= 6 && hostageDeckB.length < 24){
    hostageDeckBEl.classList.remove('outline','lighterShadow','darkerShadow')
    hostageDeckBEl.classList.add('shadow','back-blue')
  }
  else if(hostageDeckB.length >= 6 && hostageDeckB.length < 36){
    hostageDeckBEl.classList.remove('shadow','lighterShadow','outline')
    hostageDeckBEl.classList.add('darkerShadow','back-blue')
  }
}
function renderCollectionDeckA() {
  if (collectionDeckA.length === 0) {
    collectionDeckAEl.classList.remove('shadow','lighterShadow','darkerShadow','back-blue')
    collectionDeckAEl.classList.add('outline')
  }
  else if(collectionDeckA.length !== 0 && collectionDeckA.length < 12) {
    collectionDeckAEl.classList.remove('shadow','outline','darkerShadow')
    collectionDeckAEl.classList.add('lighterShadow','back-blue')
  }
  else if(collectionDeckA.length >= 6 && collectionDeckA.length < 24){
    collectionDeckAEl.classList.remove('outline','lighterShadow','darkerShadow')
    collectionDeckAEl.classList.add('shadow','back-blue')
  }
  else if(collectionDeckA.length >= 6 && collectionDeckA.length < 36){
    collectionDeckAEl.classList.remove('shadow','lighterShadow','outline')
    collectionDeckAEl.classList.add('darkerShadow','back-blue')
  }
}
function renderCollectionDeckB() {
  if (collectionDeckB.length === 0) {
    collectionDeckBEl.classList.remove('shadow','lighterShadow','darkerShadow')
    collectionDeckBEl.classList.add('outline')
  }
  else if(collectionDeckB.length !== 0 && collectionDeckB.length < 12) {
    collectionDeckBEl.classList.remove('shadow','outline','darkerShadow')
    collectionDeckBEl.classList.add('lighterShadow','back-blue')
  }
  else if(collectionDeckB.length >= 6 && collectionDeckB.length < 24){
    collectionDeckBEl.classList.remove('outline','lighterShadow','darkerShadow')
    collectionDeckBEl.classList.add('shadow','back-blue')
  }
  else if(collectionDeckB.length >= 6 && collectionDeckB.length < 36){
    collectionDeckBEl.classList.remove('shadow','lighterShadow','outline')
    collectionDeckBEl.classList.add('darkerShadow','back-blue')
  }
}
function renderEmptySoldier() {
  playedCardAEl.classList.remove('lighterShadow','shadow','darkerShadow','back-blue')
  playedCardAEl.classList.add('outline')
  playedCardBEl.classList.remove('lighterShadow','shadow','darkerShadow','back-blue')
  playedCardBEl.classList.add('outline')

}
function renderEmptyCollections () {
  collectionDeckAEl.classList.remove('lighterShadow','shadow','darkerShadow','back-blue')
  collectionDeckAEl.classList.add('outline')
  collectionDeckBEl.classList.remove('lighterShadow','shadow','darkerShadow','back-blue')
  collectionDeckBEl.classList.add('outline')
}

// Timer

// function startTimer() {
//   if (timerIntervalId) {
//     seconds = 0
//     clearInterval(timerIntervalId)
//   }
//   timerIntervalId = setInterval(tick, 1000)
// }

// function tick() {
//   seconds++
// }

// function renderTime() {
//   min = Math.floor(seconds / 60)
//   sec = seconds % 60
// }
