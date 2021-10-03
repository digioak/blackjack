import { Deck } from './deck';
import { Hand } from './hand';

const MIN_HAND_VALUE = 17;

const Dealer = class {
  constructor() {
    this.deck = new Deck({ shuffled: true });
    this.hand = new Hand();
  }

  deal({ target, faceUp = false }) {
    const card = this.deck.draw();
    card.faceUp = faceUp;
    target.hand.cards.push(card);
  }

  payOut({ target, amount }) {
    target.balance += amount;
  }

  hit() {
    this.deal({ target: this, faceUp: true });
  }

  takeTurn() {
    while (this.hand.value < MIN_HAND_VALUE) {
      this.hit();
    }
    this.hand.reveal();
  }
};

export { Dealer };
