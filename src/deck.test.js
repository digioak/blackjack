import {
  Deck,
} from './deck';

describe('Deck', () => {
  it('exists', () => {
    expect(Deck).toBeTruthy();
  });

  it('initializes cards', () => {
    const CARDS_PER_DECK = 52;
    const deck = new Deck();

    expect(deck.cards.length).toBe(CARDS_PER_DECK);
  });
});
