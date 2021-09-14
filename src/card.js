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
  two: {
    id: '2',
    label: 'Two',
    value: 2,
  },
  three: {
    id: '3',
    label: 'Three',
    value: 3,
  },
  four: {
    id: '4',
    label: 'Four',
    value: 4,
  },
  five: {
    id: '5',
    label: 'Five',
    value: 5,
  },
  six: {
    id: '6',
    label: 'Six',
    value: 6,
  },
  seven: {
    id: '7',
    label: 'Seven',
    value: 7,
  },
  eight: {
    id: '8',
    label: 'Eight',
    value: 8,
  },
  nine: {
    id: '9',
    label: 'Nine',
    value: 9,
  },
  ten: {
    id: '10',
    label: 'Ten',
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
  ace: {
    id: 'a',
    label: 'Ace',
    value: 1,
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
      return `${this.rank.label} of ${this.suit.label}`;
    }

    return CardBack;
  }
};

export {
  Card, Suits, Ranks, CardBack,
};
