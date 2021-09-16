import { Hand } from './hand';

const Player = class {
  constructor({ balance = 0 } = {}) {
    this.hand = new Hand();
    this.balance = balance;
  }

  hit({ dealer }) {
    dealer.deal({ target: this });
  }
};

export { Player };
