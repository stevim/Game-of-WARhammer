let playingDeckA = []
let playedCardA = []
let hostageDeckA = []
let collectionDeckA = []
let playingDeckB = []
let playedCardB = []
let hostageDeckB = []
let collectionDeckB = []

let startingDeck = []

let playingDeckAEl = document.getElementById('playingDeckA')
let playedCardAEl = document.getElementById('playedCardA')
let hostageDeckAEl = document.getElementById('hostageDeckA')
let collectionDeckAEl = document.getElementById('collectionDeckA')
let playingDeckBEl = document.getElementById('playingDeckB')
let playedCardBEl = document.getElementById('playedCardB')
let hostageDeckBEl = document.getElementById('hostageDeckB')
let collectionDeckBEl = document.getElementById('collectionDeckB')

let startBtnEl = document.getElementById('startBtn')
let playCardsBtnEl = document.getElementById("playCardsBtn")
let takeCardsBtnEl = document.getElementById("takeCardsBtn")
let resetBtnEl = document.getElementById('resetBtn')
let btnEl = document.querySelectorAll('.btn')

startBtnEl.addEventListener(`click`, function() {
  shuffleDeck(startingDeck)
  handleStart()
  renderPlayingDecks()
  console.log(playingDeckA,playingDeckB)
  
  startBtnEl.disabled = true
  playCardsBtnEl.disabled = false
})
playCardsBtnEl.addEventListener(`click`, function() {
  playCards()
  console.log(playingDeckA,playingDeckB,playedCardA,playedCardB,hostageDeckA,hostageDeckB,collectionDeckA,collectionDeckB)
  renderPlayingDecks()
  console.log(playingDeckA,playingDeckB,playedCardA,playedCardB,hostageDeckA,hostageDeckB,collectionDeckA,collectionDeckB)
  renderSoldiers()
  console.log(playingDeckA,playingDeckB,playedCardA,playedCardB,hostageDeckA,hostageDeckB,collectionDeckA,collectionDeckB)
  playCardsBtnEl.disabled = true
  takeCardsBtnEl.disabled = false
})
takeCardsBtnEl.addEventListener(`click`, function() {
  compareCards()
  console.log(playingDeckA,playingDeckB,playedCardA,playedCardB,hostageDeckA,hostageDeckB,collectionDeckA,collectionDeckB)
  takeCardsBtnEl.disable = true
  playCardsBtnEl.disabled = false
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
  playingDeckA = startingDeck.splice(0,26)
  playingDeckB = startingDeck.splice(0,26)
}
function playCards() {
  console.log(playingDeckA,playingDeckB,playedCardA,playedCardB,hostageDeckA,hostageDeckB,collectionDeckA,collectionDeckB)
  shuffleAndMoveDeck()
  console.log(playingDeckA,playingDeckB,playedCardA,playedCardB,hostageDeckA,hostageDeckB,collectionDeckA,collectionDeckB)
  //if both players can draw from their pile
  if (playingDeckA.length !== 0 && playingDeckB.length !== 0) {
    
    let soldierA = playingDeckA[0]
    let soldierB = playingDeckB[0]
    wasteA = playedCardA.push(soldierA)
    wasteB = playedCardB.push(soldierB)
    
  }
  //if B's draw pile is empty
  else if (playingDeckA.length !== 0 && playingDeckB.length === 0) {
    aWinsGame()
  }
  //if A's draw pile is empty
  else if (playingDeckA.length === 0 && playingDeckB.length !== 0) {
    bWinsGame()
  }
  else {
    tieGame()
  }
}
function compareCards() {
  
  soldierAWins = playedCardA[0].value > playedCardB[0].value
  soldierBWins = playedCardA[0].value < playedCardB[0].value
  soldiersTie = playedCardA[0].value === playedCardB[0].value
  
  if (soldierAWins) {
    aWinsDuel()
    renderSoldiers()
  }
  else if (soldierBWins) {
    bWinsDuel()
    renderSoldiers()
  }
  else {
    //War!!
    war()
    if (soldierAWins) {
      let allHostagesA = hostageDeckA
      let allHostagesB = hostageDeckB
      const waste = collectionDeckA.push(allHostagesA,allHostagesB)
      aWinsDuel()
    }
    else if (soldierBWins) {
      let allHostagesA = hostageDeckA
      let allHostagesB = hostageDeckB
      const waste = collectionDeckB.push(allHostagesA,allHostagesB)
      bWinsDuel()
    }
    else {
      //Double War!!
      war()
      if(soldierAWins) {
        let allHostagesA = hostageDeckA
        let allHostagesB = hostageDeckB
        const waste = collectionDeckA.push(allHostagesA,allHostagesB)
        aWinsDuel()
      }
      else if (soldierBWins) {
        let allHostagesA = hostageDeckA
        let allHostagesB = hostageDeckB
        const waste = collectionDeckB.push(allHostagesA,allHostagesB)
        bWinsDuel()
      }
      else {
        //Triple War!!
        console.log("Ceasefire! The War is over!")
        tieGame()
      }
    }
  }
}
function aWinsDuel() {
  const cardA = playedCardA.pop()
  const cardB = playedCardB.pop()
  const extra = collectionDeckA.push(cardA,cardB)
  playedCardA = []
  playedCardB = []
}
function bWinsDuel() {
  const cardA = playedCardA.pop()
  const cardB = playedCardB.pop()
  const extra = collectionDeckB.push(cardA,cardB)
  playedCardA = []
  playedCardB = []
}
function supplyHostages() {
  shuffleAndMoveDeck()
  if (playingDeckA.length >= 3 && playingDeckB.length >= 3) {
    let soldierA = playedCardA
    let soldierB = playedCardB
    let hostagesA = playingDeckA.splice(0,3)
    let hostagesB = playingDeckB.splice(0,3)
    let wasteA = hostageDeckA.push(soldierA, hostagesA)
    let wasteB = hostageDeckB.push(soldierB, hostagesB)
  } 
  else if (playingDeckA.length >= 3 && playingDeckB.length < 3){
    aWinsGame()
  }
  else if (playingDeckA.length < 3 && playingDeckB.length >= 3) {
    bWinsGame()
  } 
  else {
    if (playingDeckA.length > playingDeckB.length) {
      aWinsGame()
    }
    else if (playingDeckA.length < playingDeckB.length) {
      bWinsGame()
    }
    else {
      tieGame()
    }
  }
}
function shuffleAndMoveDeck() {
  shuffleDeck(collectionDeckA)
  shuffleDeck(collectionDeckB)
  console.log(playingDeckA,playingDeckB,playedCardA,playedCardB,hostageDeckA,hostageDeckB,collectionDeckA,collectionDeckB)
  let wasteA = playingDeckA.push(collectionDeckA)
  let wasteB = playingDeckB.push(collectionDeckB)
  playingDeckA.pop()
  playingDeckB.pop()
  console.log(playingDeckA,playingDeckB,playedCardA,playedCardB,hostageDeckA,hostageDeckB,collectionDeckA,collectionDeckB)
  playingDeckA.forEach(function(object) {
    if (playingDeckA[object] === []) {
      playingDeckA.splice([object], 1)
    }
  })
  playingDeckB.forEach(function(object) {
    if (playingDeckB[object] === []) {
      playingDeckB.splice([object], 1)
    }
  })


  collectionDeckA = []
  collectionDeckB = []
}
function war() {
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


// render functions

function renderPlayingDecks(){
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
  else {
    playingDeckAEl.classList.remove('shadow','lighterShadow','outline')
    playingDeckAEl.classList.add('darkerShadow','back-blue')
  }

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
  else {
    playingDeckBEl.classList.remove('shadow','lighterShadow','outline')
    playingDeckBEl.classList.add('darkerShadow','back-blue')
  }
}
function renderSoldiers(){
  if (playedCardA.length === 1 && playedCardB.length === 1) {
    let soldierA = playedCardA
    let soldierB = playedCardB
    let soldierAImage = soldierA[0].title
    let soldierBImage = soldierB[0].title
    playedCardAEl.classList.add(soldierAImage)
    playedCardBEl.classList.add(soldierBImage)
    playedCardAEl.classList.remove('outline','blank')
    playedCardBEl.classList.remove('outline','blank')
  } else {
    playedCardAEl.classList.add('outline','blank')
    playedCardBEl.classList.add('outline','blank')
  }

}

