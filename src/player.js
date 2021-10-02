import readlineSync from 'readline-sync';
import sleep from 'atomic-sleep';
import { Hand } from './hand';

const Player = class {
  constructor({ balance = 0 } = {}) {
    this.hand = new Hand();
    this.balance = balance;
  }

  hit({ dealer }) {
    dealer.deal({ target: this, faceUp: true });
  }

  buyIn({ amount }) {
    this.balance -= amount;
  }

  takeTurn({ dealer }) {
    let stay = false;
    const options = ['Hit', 'Stay'];

    while (!stay && !this.hand.bust && !this.hand.twentyOne) {
      const choice = readlineSync.keyInSelect(options, 'What would you like to do? ', { cancel: 'Quit' });

      if (choice === -1) {
        console.log('Thanks for playing!');
        process.exit();
      }

      if (choice === 0) {
        this.hit({ dealer });
        console.log(`You have ${this.hand.show()} = ${this.hand.value}`);
      }

      if (choice === 1) {
        stay = true;
      }

      sleep(1500);
    }
  }
};

export { Player };
