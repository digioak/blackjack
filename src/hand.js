import { chain } from 'lodash';

import { Ranks } from './card';

const Hand = class {
  constructor() {
    this.reset();
  }

  reset() {
    this.cards = [];
  }

  get count() {
    return this.cards.length;
  }

  get bust() {
    return this.value > 21;
  }

  get twentyOne() {
    return this.value === 21;
  }

  get blackjack() {
    return (this.count === 2 && this.value === 21);
  }

  get value() {
    return chain(this.cards)
      .sortBy('rank.value')
      .reverse()
      .reduce((sum, card) => (
        card.rank === Ranks.ace && sum <= 10
          ? sum + card.rank.highValue
          : sum + card.rank.value), 0)
      .value();
  }
};

export { Hand };
