import {
  Card, Ranks, Suits, CardBack,
} from './card';

describe('Card', () => {
  it('exists', () => {
    expect(Card).toBeTruthy();
  });

  it('can create new card face down', () => {
    const card = new Card({ rank: Ranks.ace, suit: Suits.spades });

    expect(card.show()).toEqual(CardBack);
  });

  it('can create new card face up', () => {
    const card = new Card({ rank: Ranks.ace, suit: Suits.spades, faceUp: true });

    expect(card.show()).toContain(Ranks.ace.label);
    expect(card.show()).toContain(Suits.spades.label);
  });

  it('has correct card value', () => {
    const card = new Card({ rank: Ranks.jack, suit: Suits.spades, faceUp: true });

    expect(card.value).toBe(Ranks.jack.value);
  });

  it('can flip over', () => {
    const card = new Card({ rank: Ranks.jack, suit: Suits.clubs });
    card.flip();

    expect(card.show()).toContain(Ranks.jack.label);
    expect(card.show()).toContain(Suits.clubs.label);
  });
});
