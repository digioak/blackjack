import {
  Dealer,
} from './dealer';
import { Player } from './player';

describe('Dealer', () => {
  it('exists', () => {
    expect(Dealer).toBeTruthy();
  });

  it('has deck', () => {
    const dealer = new Dealer();

    expect(dealer.deck).toBeTruthy();
  });

  it('has hand', () => {
    const dealer = new Dealer();

    expect(dealer.hand).toBeTruthy();
    expect(dealer.hand.count).toBe(0);
  });

  it('deals to self', () => {
    const dealer = new Dealer();

    dealer.deal({ target: dealer });
    dealer.deal({ target: dealer });

    const [firstCard, secondCard] = dealer.hand.cards;

    expect(dealer.hand.count).toBe(2);
    expect(firstCard).not.toEqual(secondCard);
  });

  it('deals to player', () => {
    const dealer = new Dealer();
    const player = new Player();

    dealer.deal({ target: player });
    dealer.deal({ target: player });

    const [firstCard, secondCard] = player.hand.cards;

    expect(player.hand.count).toBe(2);
    expect(firstCard).not.toEqual(secondCard);
  });

  it('hits', () => {
    const dealer = new Dealer();

    dealer.hit();

    expect(dealer.hand.count).toBe(1);
    expect(dealer.hand.value).toBeGreaterThanOrEqual(1);
  });
});
