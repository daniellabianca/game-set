

class Deck {
  constructor(numbers, shadings, colors, shapes) {
    // instances of the Deck class
    this.deck = [];
    // reset game function
    resetGame();
    // shuffle deck function
   shuffleDeck();
    // arrays assigned to each card variable
    this.deck.numbers = numbers;
    this.shadings = shadings;
    this.colors = colors;
    this.shapes = shapes;
  }
}

class Card extends Deck {
  constructor(numbers, shadings, colors, shapes) {
    super(numbers, shadings, colors, shapes)
    this.deck.numbers = [1, 2, 3];
    this.shadings = ["Solid", "Striped", "Outline"];
    this.colors = ["Green", "Red", "Blue"];
    this.shapes = ["Oval", "Squiggle", "Diamond"];
  }
}
// this function also deals the deck.
class resetGame {
  constructor() {
    this.deck = [];
    // arrays assigned to each card variable
    this.deck.numbers = [1, 2, 3];
    const shadings = ["Solid", "Striped", "Outline"];
    const colors = ["Green", "Red", "Blue"];
    const shapes = ["Oval", "Squiggle", "Diamond"];
    // loop over the arrays
    for (let number in this.deck.numbers) {
      for (let shading in shadings) {
        for (let color in colors) {
          for (let shape in shapes) {
            // to create the 81 cards
            this.deck.push(new Card(`${shadings[shading]}-${colors[color]}-${shapes[shape]}-${this.deck.numbers[number]}`));
          }
        }
      }
      console.log(number);
    }
    // return the deck
    return this.deck;
  }
}


  // shuffle deck
function shuffleDeck() { 
    // sort the deck, then shuffle it
    this.deck.sort(function() {
      return 0.5 - Math.random();
    });
    // return the deck
    return this;
  }
  // deal cards
  function dealCards() {
    // if the deck is greater than zero
    if (this.deck > 0)
      // splice the deck to get the 12 cards
      // is this still removing cards from the array?
      this.deck.splice();
    // find the card divs in the dom
    let card = document.getElementsByClassName("card");
    // assign a variable to an array of card divs
    let cards = [...card];
    // loop to add event listeners to each card
    for (var i = 0; i < cards.length; i++) {
      for (var i = 0; i < this.deck.length; i++) {
        $(cards[i]).html(
          `<img src="public/images/${this.deck[i]}.png" alt="${
            this.deck[i]
          }" data-count="${this.deck.numbers[i]}">`
        );
      }
    }
    console.log(this.numbers);
  }



//play1 creates a new deck of 81 cards (e.g. one striped diamond)
const play1 = new Deck();
//shuffle the new deck
play1.shuffleDeck();
//deal the new deck
play1.dealCards();

//deal 12 cards to the 12 divs
let cardOne = "";
let cardTwo = "";
let cardThree = "";
let count = 0;
//player must pick 3 cards that make a set
//on user click, add cards to new empty array

let previousTarget = null;

$(".row").on("click", ".card", function(event) {
  // Check if 3 cards selected
  var S = $(".card.selected");
  if (S.length >= 3 && !$(this).hasClass("selected")) return;

  $(this).toggleClass("selected");
  // Deck.checkSet();
  return false;
});


//determine if a set is made
//if cards are a set
//congratulate player
//copy cards to smaller set div

//if cards are not a set
//alert player

//if no more sets can be found
//alert player

//add reset button for player
//to start new game

//cards that make a set:
//can a mathmatical formula be used to automatically determine if a set can be made? This would be more dry.
//if not, how best to cover all possible sets?
