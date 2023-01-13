let sum = 0;
let hasBlackJack = false;
let isAlive = false; // Before the Game is started
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let newDrawnCard;
let cards = []; //Cards Deck is here!
// Final Component [Winning]
let playerName = "Saoud";
let playerChips = 140;
let playerAmountDisplay = document.getElementById("player-money");

playerAmountDisplay.textContent = playerName + ": $" + playerChips;

// Random Card:
function getRandomCard() {
  // if 1     -> return 11
  // if 11-13 -> return 10
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  // Following Game real rules In case A should be 11
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

// Start Game
function startGame() {
  isAlive = true; // Yeah the game has started now!
  // Generate two random numbes
  let firstCard = getRandomCard(); //Get Random Card instead of hard coded one
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  // Re-assign the cards and sum variables so that the game can start
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
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
  // Logic is:  Only allow the player to get a new card if she IS alive and does NOT have Blackjack

  if (!isAlive || hasBlackJack) {
    alert("Please Start A New Game!");
  } else if (isAlive === true && hasBlackJack === false) {
    newDrawnCard = getRandomCard();
    sum += newDrawnCard;
    // Adding the card to the deck cards list!
    cards.push(newDrawnCard);
    // Call startGame func to show the message so we need to run the code inside the renderGame function.

    renderGame();
  }
  // console.log("Drawing a new card from the deck!")
}
