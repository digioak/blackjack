import Chance from 'chance';
import { Card, Ranks, Suits } from './card';

const chance = new Chance();

const Deck = class {
  constructor({ shuffled = true } = {}) {
    this.reset();

    if (shuffled) {
      this.shuffle();
    }
  }

  reset() {
    this.cards = [];

    Object.keys(Ranks).forEach((rank) => {
      Object.keys(Suits).forEach((suit) => {
        this.cards.push(new Card({ rank: Ranks[rank], suit: Suits[suit] }));
      });
    });
  }

  get count() {
    return this.cards.length;
  }

  shuffle() {
    this.cards = chance.shuffle(this.cards);
  }

  draw() {
    return this.cards.pop();
  }
};

export { Deck };
