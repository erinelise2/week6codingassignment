// need to create a player class. 
// player properties... player name, game score, cards in their hand

class Player {
    constructor(name) { // passing player name through
        this.name = name; // player name
        this.score = 0 // starting and default score
        this.hand = [] // starting hand is an array of 26 cards.
    }
}

// need to create a card class.
// card properties.. card value, the suit of the card, order/rank of the card to beat the others... color of card isn't important

class Card {
    constructor(faceValue, suit, rank){
        this.faceValue = faceValue; //card value
        this.suit = suit; //card suit
        this.rank = rank; //ranking for winning
    }
}

// need to create a deck class.
// there are 52 cards. There are 4 suits with 13 cards in each suit... numbers and strings for face cards
// arrays can hold the items that get passed through... will need to be random, so iterate through the arrays.

class Deck { //building the deck using the created card class parameters
    constructor () {
        this.deck = [];
        this.faceValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
        this.suits = ["Spades", "Clubs", "Hearts", "Diamonds"];
        this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.playerDeck1 = [];
        this.playerDeck2 = [];
    }
    // build the deck inside of the Deck class. f is facecard and s is suit
        createDeck() {
        for(let fIndex = 0; fIndex < this.faceValues.length; fIndex++) {
            for(let sIndex = 0; sIndex < this.suits.length; sIndex++) {
                this.deck.push(new Card(this.faceValues[fIndex], this.suits[sIndex], this.ranks[fIndex]));
            }
        }
    }
// random cards... so, a shuffling method to deal them out to the two players
// Math codes: .random is random number between 0 and 1. .floor returns largest integer less than or equal to x.
// .random ex: num = Math.floor(Math.random() * (max - min + 1)) + min;
// .max return larges of zero or more numbers. .min returns smallest of zero or more numbers

       shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.deck [i];
            this.deck[i] = this.deck [j];
            this.deck[j] = temp;
        }
        console.log(this.deck);
    }
// deal the cards out to each player. need to split the deck in half. (.slice)
        dealDeck() {
            this.playerDeck1 = this.deck.slice(0,26);
            this.playerDeck2 = this.deck.slice(26, 52);
    }
}
// now that the deck is created... Each player will receive 26 cards
// Players will lay down one card each. The player with the highest card wins the round and 
// recieves a point. The game continues with the point accumulating based on playing highest card.
// if both players lay down the same value of card, no one wins. (would be cool to see how to code out a war)

class TimeToPlay {
    constructor () {
        this.player1 = null;
        this.player2 = null;
    }
    startGame() {
    // To create two new players
        this.player1 = new Player (prompt('Enter Name for Player One: '));
        this.player2 = new Player (prompt('Enter Name for Player Two: '));

    // To create the deck
        this.gameDeck = new Deck ();
        this.gameDeck.createDeck();

    // To shuffle and deal the deck.
        this.gameDeck.shuffleDeck();
        this.gameDeck.dealDeck();
    }
    dealHands() { // this will push the arrays from the splitting of the deck in the deal method to each player.
        for (let i = 0; i < 26; i++) {
            this.player1.hand.push(this.gameDeck.playerDeck1[i]);
        }
        for (let i = 0; i < 26; i++) {
            this.player2.hand.push(this.gameDeck.playerDeck2[i]);
        }
        console.log(this.player1.hand);
        console.log(this.player2. hand); // logging their hands to see the arrays of 26 different cards each
    } 
// For each round, each player will play a card.
// Cards need to be compared to see the highest value/winner. Print the name and card each time.
    compareCards () {
        for (let round = 0; round < 26; round ++) {
            console.log("Game Round: ", round);
            console.log(`${this.player1.name}: ${this.player1.hand[round].faceValue} of ${this.player1.hand[round].suit}`);
            console.log(`${this.player2.name}: ${this.player2.hand[round].faceValue} of ${this.player2.hand[round].suit}`);

            if(this.player1.hand[round].rank > this.player2.hand[round].rank) {
                this.player1.score++;
                console.log(`${this.player1.name} score: ${this.player1.score}`);
                console.log(`${this.player2.name} score: ${this.player2.score}`);
                console.log(`${this.player1.name} won this round!
                `)
            } else if (this.player2.hand[round].rank > this.player1.hand[round].rank) {
                this.player2.score++;
                console.log(`${this.player1.name} score: ${this.player1.score}`);
                console.log(`${this.player2.name} score: ${this.player2.score}`);
                console.log(`${this.player2.name} won this round!
                `)
            } else {
                console.log(`${this.player1.name} score: ${this.player1.score}`);
                console.log(`${this.player2.name} score: ${this.player2.score}`);
                console.log(`This Round is a Tie
                `);
             }
        }
    }
// The cards are dealt and scores are incremented... have to set a method to determine the winner
// Compare and print out the winner if one is greater than the other...
    nameTheWinner () {
        if(this.player1.score > this.player2.score) {
            console.log(`${this.player1.name} is the winner!`);
            console.log(`Final Scores:
            ${this.player1.name}: ${this.player1.score}
            ${this.player2.name}: ${this.player2.score}`);
        } else if(this.player2.score > this.player1.score) {
            console.log(`${this.player2.name} is the winner!`);
            console.log(`Final Scores:
            ${this.player2.name}: ${this.player2.score}
            ${this.player1.name}: ${this.player1.score}`);
        } else {
            console.log("This game ended in a tie. Play again!");
            console.log(`Final Scores:
            ${this.player1.name}: ${this.player1.score}
            ${this.player2.name}: ${this.player2.score}`);
        }
    }
}
// The game is set up, need to call them all to run and see how it works...

let thisWarGame = new TimeToPlay();
thisWarGame.startGame(); // method on top of object. Calls the game to begin

thisWarGame.dealHands(); // deals out the hands for each player

thisWarGame.compareCards(); // compares cards by ranked value

thisWarGame.nameTheWinner(); // calling the method to name the winner of the game.

