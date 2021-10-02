import { Deck } from './deck';
import { Hand } from './hand';

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

  takeTurn({ player }) {
    while (this.hand.value < player.hand.value) {
      this.hit();
    }
    this.hand.reveal();
  }
};

export { Dealer };
