import { sum } from 'lodash';
import {
  Hand,
} from './hand';

import { Card, Ranks, Suits } from './card';

describe('Hand', () => {
  it('exists', () => {
    expect(Hand).toBeTruthy();
  });

  it('starts empty', () => {
    const hand = new Hand();

    expect(hand.count).toEqual(0);
  });

  it('has count', () => {
    const hand = new Hand();

    const cards = [
      new Card({ rank: Ranks.two, suit: Suits.spades }),
      new Card({ rank: Ranks.three, suit: Suits.spades }),
      new Card({ rank: Ranks.four, suit: Suits.spades }),
    ];
    hand.cards = cards;

    expect(hand.count).toBe(cards.length);
  });

  it('has value without aces', () => {
    const hand = new Hand();

    hand.cards.push(new Card({ rank: Ranks.two, suit: Suits.spades }));
    hand.cards.push(new Card({ rank: Ranks.nine, suit: Suits.hearts }));

    expect(hand.value).toEqual(Ranks.two.value + Ranks.nine.value);
  });

  it('has value with one high ace', () => {
    const hand = new Hand();

    hand.cards.push(new Card({ rank: Ranks.ace, suit: Suits.spades }));
    hand.cards.push(new Card({ rank: Ranks.nine, suit: Suits.hearts }));

    expect(hand.value).toEqual(Ranks.ace.highValue + Ranks.nine.value);
  });

  it('has value with exactly two aces', () => {
    const hand = new Hand();

    hand.cards.push(new Card({ rank: Ranks.ace, suit: Suits.spades }));
    hand.cards.push(new Card({ rank: Ranks.ace, suit: Suits.hearts }));

    expect(hand.value).toEqual(Ranks.ace.highValue + Ranks.ace.value);
  });

  it('has value with one high and one low ace', () => {
    const hand = new Hand();

    hand.cards.push(new Card({ rank: Ranks.ace, suit: Suits.spades }));
    hand.cards.push(new Card({ rank: Ranks.ace, suit: Suits.hearts }));
    hand.cards.push(new Card({ rank: Ranks.five, suit: Suits.clubs }));

    expect(hand.value).toEqual(sum([Ranks.ace.highValue, Ranks.ace.value, Ranks.five.value]));
  });

  it('does not have blackjack', () => {
    const hand = new Hand();

    hand.cards.push(new Card({ rank: Ranks.king, suit: Suits.spades }));
    hand.cards.push(new Card({ rank: Ranks.queen, suit: Suits.hearts }));

    expect(hand.bust).toBe(false);
    expect(hand.blackjack).toBe(false);
  });

  it('has blackjack', () => {
    const hand = new Hand();

    hand.cards.push(new Card({ rank: Ranks.king, suit: Suits.spades }));
    hand.cards.push(new Card({ rank: Ranks.ace, suit: Suits.clubs }));

    expect(hand.bust).toBe(false);
    expect(hand.blackjack).toBe(true);
  });

  it('has twenty-one', () => {
    const hand = new Hand();

    hand.cards.push(new Card({ rank: Ranks.four, suit: Suits.spades }));
    hand.cards.push(new Card({ rank: Ranks.eight, suit: Suits.clubs }));
    hand.cards.push(new Card({ rank: Ranks.nine, suit: Suits.hearts }));

    expect(hand.bust).toBe(false);
    expect(hand.twentyOne).toBe(true);
  });

  it('busts', () => {
    const hand = new Hand();

    hand.cards.push(new Card({ rank: Ranks.ten, suit: Suits.spades }));
    hand.cards.push(new Card({ rank: Ranks.nine, suit: Suits.clubs }));
    hand.cards.push(new Card({ rank: Ranks.three, suit: Suits.hearts }));

    expect(hand.bust).toBe(true);
  });

  it('resets', () => {
    const hand = new Hand();

    hand.cards.push(new Card({ rank: Ranks.ten, suit: Suits.spades }));
    hand.cards.push(new Card({ rank: Ranks.nine, suit: Suits.clubs }));

    hand.reset();

    expect(hand.count).toBe(0);
  });
});
