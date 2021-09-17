import { Game } from './game';

describe('Game', () => {
  it('exists', () => {
    expect(Game).toBeTruthy();
  });

  it('has dealer', () => {
    const game = new Game();

    expect(game.dealer).toBeTruthy();
  });

  it('has player', () => {
    const game = new Game();

    expect(game.player).toBeTruthy();
  });

  it.skip('starts', () => {
    const game = new Game();

    expect(game.inProgress).toBeFalsy();

    game.start();

    expect(game.inProgress).toBeTruthy();
  });
});
