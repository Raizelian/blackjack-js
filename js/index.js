let player = {
  name: "Raizelian",
  chips: 130
}

let cards = []
let sum = 0
let isAlive = false                           // tracks if the player busted out
let hasBlackJack = false                      // by default you don't have blackjack
let message = ""                              // keeping logs is useful!
let messageEl = document.getElementById("message-el")

sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": €" + player.chips

function getRandomCard() {
  // we need a card between 1 and 13; we are treating the ace as 11; J, Q and K = 10
  let randomCard = Math.floor( Math.random() * 13 ) + 1
  
  if (randomCard > 10) {
    return 10
  } else if (randomCard === 1) {
    return 11
  } else {
    return randomCard
  }
}

function renderGame() {
  
  cardsEl.textContent = "Cards: "

  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else /* if (sum > 21) */ {
    message = "You're out of the game!"
    isAlive = false
  } 

  messageEl.textContent = message

}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}
