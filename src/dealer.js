import { Deck } from './deck';
import { Hand } from './hand';

const Dealer = class {
  constructor() {
    this.deck = new Deck({ shuffled: true });
    this.hand = new Hand();
  }

  deal({ target }) {
    const card = this.deck.draw();
    target.hand.cards.push(card);
  }

  hit() {
    this.deal({ target: this });
  }
};

export { Dealer };
