import sleep from 'atomic-sleep';
import { Dealer } from './dealer';
import { Player } from './player';

const Game = class {
  initialBalance = 100

  costPerRound = 10

  constructor() {
    this.dealer = new Dealer();
    this.player = new Player({ balance: this.initialBalance });
    this.started = false;
  }

  checkForBackjack() {
    if (this.player.hand.blackjack && this.dealer.hand.blackjack) {
      console.log("It's a push.");
      this.player.balance += this.costPerRound;
    }

    if (this.dealer.hand.blackjack) {
      console.log('Dealer has a blackjack! Sorry, you lose.');
    }

    if (this.player.hand.blackjack) {
      console.log('You have a blackjack! You win!');
      this.player.balance += this.costPerRound * 2;
    }

    return this.player.hand.blackjack || this.dealer.hand.blackjack;
  }

  reset() {
    this.dealer.hand.reset();
    this.player.hand.reset();

    this.dealer.deck.reset();
    this.dealer.deck.shuffle();
  }

  dealCards() {
    this.dealer.deal({ target: this.player, faceUp: true });
    this.dealer.deal({ target: this.dealer });

    this.dealer.deal({ target: this.player, faceUp: true });
    this.dealer.deal({ target: this.dealer, faceUp: true });
  }

  resolve() {
    console.log(`Dealer has ${this.dealer.hand.show()} = ${this.dealer.hand.value}`);

    if (this.dealer.hand.bust) {
      console.log('Dealer busts, you win!');
      this.dealer.payOut({ target: this.player, amount: this.costPerRound * 2 });
    } else if (this.player.hand.value > this.dealer.hand.value) {
      console.log('You win!');
      this.dealer.payOut({ target: this.player, amount: this.costPerRound * 2 });
    } else if (this.player.hand.value === this.dealer.hand.value) {
      console.log("It's a push.");
      this.dealer.payOut({ target: this.player, amount: this.costPerRound });
    } else {
      console.log('You lose, sorry.');
    }
  }

  start() {
    console.log("Welcome to Oak's Blackjack!");
    console.log(`Each hand costs $${this.costPerRound}, here we go!`);

    this.inProgress = true;

    while (this.inProgress && this.player.balance > 0) {
      this.player.buyIn({ amount: this.costPerRound });
      console.log(`\nYour balance is $${this.player.balance}.\n`);

      this.reset();
      this.dealCards();

      console.log(`Dealer has ${this.dealer.hand.show()}`);
      console.log(`You have ${this.player.hand.show()} = ${this.player.hand.value}`);

      if (this.checkForBackjack()) {
        sleep(3000);
        continue;
      }

      this.player.takeTurn({ dealer: this.dealer });

      if (this.player.hand.bust) {
        console.log('You bust, sorry.');
        sleep(3000);
        continue;
      }

      this.dealer.takeTurn({ player: this.player });

      this.resolve();

      sleep(3000);
    }

    if (this.player.balance <= 0) {
      console.log('Out of funds... better luck next time!');
    }
  }
};

export { Game };
