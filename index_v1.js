let firstCard = getRandomCard(); //Get Random Card instead of hard coded one
let secondCard = getRandomCard();
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let newDrawnCard;

// Random Card
function getRandomCard() {
  return 4;
}

// Start Game
function startGame() {
  renderGame();
}

function renderGame() {
  if (newDrawnCard) {
    cardsEl.textContent =
      "Cards: " + firstCard + " " + secondCard + " " + newDrawnCard;
  } else {
    // render out firstCard and secondCard [Default]
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
  newDrawnCard = getRandomCard();
  // Adding the new card to the sum variable
  sum += newDrawnCard;
  // Call startGame func to show the message so we need to run the code inside the renderGame function.
  renderGame();
}

// function newCard() {
//   // Logic is:  Only allow the player to get a new card if she IS alive and does NOT have Blackjack
//   if (isAlive === true && hasBlackJack === false) {
//     let card = getRandomCard();
//     sum += card;
//     cards.push(card);

//     // Call startGame func to show the message so we need to run the code inside the renderGame function.
//     renderGame();
//   }
// }
