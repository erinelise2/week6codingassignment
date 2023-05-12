const expect = chai.expect
const assert = chai.assert

describe('Week 6 Assignment Test: War Game', () => {
    describe('Does the createDeck function have a deck of 52 cards', () => {
        it('#Should return a deck of 52 cards', () => {
            // use code from assignment. 
            let deckTest = new Deck();
            deckTest.createDeck();
            // write test to ensure it works
            expect(deckTest.deck.length).to.equal(52);
            // console.log(deckTest.deck.length); // prints deck length to console
            }) // closing it line
        }) // closing question line
    describe(`Does the card have a value and a suit`, () => {
        it('#Should take a suit and a value', (done) => {
            let card = new Card(2,"Hearts");
            expect(card.faceValue).to.equal(2);
            expect(card.suit).to.equal("Hearts");
            done();
            }) // closing it line
         }) //closing question line
    }) // closing top line
