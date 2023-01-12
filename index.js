let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let newDrawnCard;

// Start Game
function startGame() {
  renderGame();
}

function renderGame() {
  if (newDrawnCard) {
    cardsEl.textContent =
      "Cards: " + firstCard + " " + secondCard + " " + newDrawnCard;
  } else {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  }

  sumEl.textContent = "Sum: " + sum;
  // cardsEl.textContent = "Cards: " + firstCard + " " + secondCard + newDrawnCard
  // sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  // console.log("Drawing a new card from the deck!")
  // cardsEl.textContent += card;
  newDrawnCard = 7;
  // Adding the new card to the sum variable
  sum += newDrawnCard;
  // Call startGame func to show the message so we need to run the code inside the renderGame function.
  renderGame();
}
