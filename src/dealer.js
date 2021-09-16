import { Deck } from './deck';
import { Hand } from './hand';

const MIN_HAND_VALUE = 17;

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

  resolve() {
    while (this.hand.value <= MIN_HAND_VALUE) {
      this.hit();
    }
  }
};

export { Dealer, MIN_HAND_VALUE };
