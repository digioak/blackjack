import { Dealer } from './dealer';
import {
  Player,
} from './player';

const INITIAL_BALANCE = 100;

describe('Dealer', () => {
  it('exists', () => {
    expect(Player).toBeTruthy();
  });

  it('has hand', () => {
    const player = new Player();

    expect(player.hand).toBeTruthy();
    expect(player.hand.count).toBe(0);
  });

  it('hits', () => {
    const player = new Player();
    const dealer = new Dealer();

    player.hit({ dealer });

    expect(player.hand.count).toBe(1);
  });

  it('has balance', () => {
    const player = new Player();

    expect(player.balance).toBe(0);
  });

  it('sets initial balance', () => {
    const player = new Player({ balance: INITIAL_BALANCE });

    expect(player.balance).toEqual(INITIAL_BALANCE);
  });
});
