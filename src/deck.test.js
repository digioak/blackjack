import { first } from 'lodash';
import { Ranks } from './card';
import {
  Deck,
} from './deck';

const CARDS_PER_DECK = 52;

describe('Deck', () => {
  it('exists', () => {
    expect(Deck).toBeTruthy();
  });

  it('initializes', () => {
    const deck = new Deck({ shuffled: false });

    expect(deck.count).toBe(CARDS_PER_DECK);
    expect(first(deck.cards).rank).toBe(Ranks.ace);
  });

  it('resets', () => {
    const deck = new Deck();

    expect(deck.count).toBe(CARDS_PER_DECK);
  });

  it('shuffles', () => {
    const deck = new Deck({ shuffled: false });
    const unshuffledCards = deck.cards.map((c) => c.rank);

    deck.shuffle();

    const shuffledCards = deck.cards.map((c) => c.rank);

    expect(shuffledCards).not.toEqual(unshuffledCards);
  });

  it('draws', () => {
    const deck = new Deck();

    const card = deck.draw();

    expect(card).toBeTruthy();
    expect(card.rank).toBeTruthy();
    expect(card.suit).toBeTruthy();
    expect(deck.count).toBe(CARDS_PER_DECK - 1);
  });
});
