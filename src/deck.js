import Chance from 'chance';
import { Card, Ranks, Suits } from './card';

const chance = new Chance();

const Deck = class {
  constructor({ shuffled = true } = {}) {
    this.initialize();

    if (shuffled) {
      this.shuffle();
    }
  }

  initialize() {
    this.cards = [];

    Object.keys(Ranks).forEach((rank) => {
      Object.keys(Suits).forEach((suit) => {
        this.cards.push(new Card({ rank, suit }));
      });
    });
  }

  get count() {
    return this.cards.length;
  }

  shuffle() {
    this.cards = chance.shuffle(this.cards);
  }
};

export { Deck };
