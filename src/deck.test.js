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

    expect(deck.count).toBe(CARDS_PER_DECK);
  });

  it('shuffles cards', () => {
    const deck = new Deck({ shuffled: false });
    const unshuffledCards = deck.cards.map((c) => c.rank);

    deck.shuffle();

    const shuffledCards = deck.cards.map((c) => c.rank);

    expect(shuffledCards).not.toEqual(unshuffledCards);
  });
});
