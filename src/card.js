const Suits = {
  spades: {
    id: 's',
    label: '♠️',
  },
  hearts: {
    id: 'h',
    label: '❤️',
  },
  diamonds: {
    id: 'd',
    label: '♦️',
  },
  clubs: {
    id: 'c',
    label: '♣️',
  },
};

const Ranks = {
  ace: {
    id: 'a',
    label: 'Ace',
    value: 1,
    highValue: 11,
  },
  two: {
    id: '2',
    label: '2',
    value: 2,
  },
  three: {
    id: '3',
    label: '3',
    value: 3,
  },
  four: {
    id: '4',
    label: '4',
    value: 4,
  },
  five: {
    id: '5',
    label: '5',
    value: 5,
  },
  six: {
    id: '6',
    label: '6',
    value: 6,
  },
  seven: {
    id: '7',
    label: '7',
    value: 7,
  },
  eight: {
    id: '8',
    label: '8',
    value: 8,
  },
  nine: {
    id: '9',
    label: '9',
    value: 9,
  },
  ten: {
    id: '10',
    label: '10',
    value: 10,
  },
  jack: {
    id: 'j',
    label: 'Jack',
    value: 10,
  },
  queen: {
    id: 'q',
    label: 'Queen',
    value: 10,
  },
  king: {
    id: 'k',
    label: 'King',
    value: 10,
  },
};

const CardBack = '🂠';

const Card = class {
  constructor({ rank, suit, faceUp = false }) {
    this.rank = rank;
    this.suit = suit;
    this.faceUp = faceUp;
  }

  get value() {
    return this.rank.value;
  }

  flip() {
    this.faceUp = !this.faceUp;
  }

  show() {
    if (this.faceUp) {
      return `(${this.rank.label} ${this.suit.label})`;
    }

    return CardBack;
  }
};

export {
  Card, Suits, Ranks, CardBack,
};
