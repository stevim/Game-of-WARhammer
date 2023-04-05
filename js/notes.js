  // while (startingDeck.length > 26) {
  //   let randIdx = Math.floor(Math.random()*startingDeck.length)
  //   let cardPicked = startingDeck.splice(randIdx, 1)
  //   playingDeckA.push(cardPicked)
  // }
  // while (startingDeck.length > 0) {
  //   let randIdx = Math.floor(Math.random()*startingDeck.length)
  //   let cardPicked = startingDeck.splice(randIdx, 1)
  //   playingDeckB.push(cardPicked)
  // }

      // playedCardA = playingDeckA.splice(0,1)
    // playedCardB = playingDeckB.splice(0,1)

        // const wonCard = playedCardB.splice(0,1)
    // collectionDeckA.splice(0, 0, wonCard)

        // const wonCard = playedCardA.splice(0,1)
    // collectionDeckB.splice(0, 0, wonCard)

        // let hostagesA = playingDeckA.splice(0,3)
    // let hostagesB = playingDeckB.splice(0,3)
    // hostageDeckA.splice(0,0,hostagesA,playedCardA[0])
    // hostageDeckB.splice(0,0,hostagesB,playedCardB[0])
    // playedCardA.pop()
    // playedCardB.pop()

    // collectionDeckB.push(hostagesA[0],hostagesA[1],hostagesA[2],hostagesB[0],hostagesB[1],hostagesB[2])


     // collectionDeckA.push(hostagesA[0],hostagesA[1],hostagesA[2],hostagesB[0],hostagesB[1],hostagesB[2])
       // hostagesA.forEach(function(card) {
  //   collectionDeckA.push(hostagesA[card.value-1])
  // })
  // hostagesB.forEach(function(card) {
  //   collectionDeckA.push(hostagesB[card.value-1])
  // })

    // hostagesA.forEach(function(card) {
  //   collectionDeckB.push(hostagesA[card.value-1])
  // })
  // hostagesB.forEach(function(card) {
  //   collectionDeckB.push(hostagesB[card.value-1])
  // })
// function shuffleCollectionDeckA() {
//   if (collectionDeckA.length !== 0) {
//     shuffleDeck(collectionDeckA)
//     playingDeckA = collectionDeckA
//     collectionDeckA = []
//   } else {
//     bWinsGame()
//   }
// }

// function shuffleCollectionDeckB() {
  // if (collectionDeckB !== 0) {
  //   shuffleDeck(collectionDeckB)
  //   playingDeckB = collectionDeckB
  //   collectionDeckB = []
  // } else {
  //   aWinsGame()
  // }
// }
function moveDeck(pDeck,cDeck) {
    console.log(playingDeckA,collectionDeckA)
    pDeck = cDeck
    console.log(playingDeckA,collectionDeckA)
    cDeck = []
    console.log(playingDeckA,collectionDeckA)
}
moveDeck(playingDeckA,collectionDeckA)
moveDeck(playingDeckB,collectionDeckB)
function moveDeckA() {
    playingDeckA = collectionDeckA
    collectionDeckA = []
}
function moveDeckB() {
    playingDeckB = collectionDeckB
    collectionDeckB = []
}
moveDeckA()
moveDeckB()

