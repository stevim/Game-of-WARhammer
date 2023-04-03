function init() {
  // startingDeck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

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

let playingDeckA = []
let playedCardA = []
let hostageDeckA = []
let collectionDeckA = []

let playingDeckB = []
let playedCardB = []
let hostageDeckB = []
let collectionDeckB = []

let startingDeck = []

let deck1El = document.getElementById('playingDeckA')
let deck2El = document.getElementById('playedCardA')
let deck3El = document.getElementById('hostageDeckA')
let deck4El = document.getElementById('collectionDeckA')
let deck5El = document.getElementById('playingDeckB')
let deck6El = document.getElementById('playedCardB')
let deck7El = document.getElementById('hostageDeckB')
let deck8El = document.getElementById('collectionDeckB')

document.getElementById(`startBtn`).addEventListener(`click`, function() {
  shuffleDeck(startingDeck)
  handleStart()
  console.log(playingDeckA)
  console.log(playingDeckB)
  console.log(collectionDeckA)
  console.log(collectionDeckB)
  
})

document.getElementById('nextTurnBtn').addEventListener(`click`, function() {
  playCards()
  compareCards()
  
  console.log(playedCardA)
  console.log(playedCardB)

  console.log(collectionDeckA)
  console.log(collectionDeckB)
})

document.getElementById('resetBtn').addEventListener(`click`, function() {
  handleReset()
})

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
  playingDeckA = startingDeck.splice(0,26)
  playingDeckB = startingDeck.splice(0,26)
}

function compareCards() {
  if (playedCardA[0].value > playedCardB[0].value) {
    playerAWins()
    console.log(`Player A Wins!`)
  } else if (playedCardA[0].value < playedCardB[0].value) {
    playerBWins()
    console.log(`Player B Wins!`)
  } else {
// War!
    console.log("War!")
    supplyHostages()
    playCards()
    if (playedCardA[0].value > playedCardB[0].value) {
    playerAWins()
    winHostagesA()
    } else if (playedCardA[0].value < playedCardB[0].value) {
    playerBWins()
    winHostagesB()
    } else { 
      // Double War!
      supplyHostages()
      playCards()
      if (playedCardA[0].value > playedCardB[0].value) {
        playerAWins()
        winHostagesA()
        } else if (playedCardA[0].value < playedCardB[0].value) {
        playerBWins()
        winHostagesB()
        } else {
          // Triple War aka Tie
        }
    }
  }
}

function handleReset() {

}
function playCards() {
  if (playingDeckA.length !== 0 && playingDeckB.length !== 0) {
  createAndPlayPlayedCards()
  }
  if (playingDeckA.length !== 0 && playingDeckB.length === 0) {
    shuffleCollectionDeckB()
    createAndPlayPlayedCards()
  }
  if (playingDeckA.length === 0 && playingDeckB.length !== 0) {
    shuffleCollectionDeckA()
    createAndPlayPlayedCards()
  } 
  if (playingDeckA.length === 0 && playingDeckB.length === 0) {
    shuffleCollectionDeckA()
    shuffleCollectionDeckB()
    createAndPlayPlayedCards()
    // render message tie game
  }
}

function shuffleCollectionDeckA() {
  if (collectionDeckA.length !== 0) {
    shuffleDeck(collectionDeckA)
    console.log(`shuffled`)
    
    playingDeckA = collectionDeckA
    collectionDeckA = []
    console.log(`moved`)
  } else {
  bWinsGame()
    
  }
  
}
function shuffleCollectionDeckB() {
  if (collectionDeckB !== 0) {
    shuffleDeck(collectionDeckB)
    console.log(`shuffled`)
    playingDeckB = collectionDeckB
    collectionDeckB = []
    console.log(`moved`)
  } else {
    aWinsGame()
  }
}


function aWinsGame() {
  
}

function bWinsGame() {

}

function supplyHostages() {    
  const hostagesA = playingDeckA.shift()
  const hostagesB = playingDeckB.shift()
  const cardA = playedCardA.shift()
  const cardB = playedCardB.shift()
  hostageDeckA.push(hostagesA,cardA)
  hostageDeckB.push(hostagesB,cardB)
}

function playerAWins() {
  const cardA = playedCardA.shift()
  const cardB = playedCardB.shift()
  collectionDeckA.push(cardA,cardB)
}

function playerBWins() {
  const cardA = playedCardA.shift()
  const cardB = playedCardB.shift()
  collectionDeckB.push(cardA,cardB)
}

function winHostagesA() {
  const hostagesA = hostageDeckA.splice(0,hostageDeckA.length)
  const hostagesB = hostageDeckB.splice(0,hostageDeckB.length)
  collectionDeckA.push(hostagesA,hostagesB)
}
function winHostagesB() {
  const hostagesA = hostageDeckA.splice(0,hostageDeckA.length)
  const hostagesB = hostageDeckB.splice(0,hostageDeckB.length)
  collectionDeckB.push(hostagesA,hostagesB)
}

function createAndPlayPlayedCards() {
  const cardA = playingDeckA.shift()
  const cardB = playingDeckB.shift()
  playedCardA.push(cardA)
  playedCardB.push(cardB)
}

function playPlayedCards() {

}