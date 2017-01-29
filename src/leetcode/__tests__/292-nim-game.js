var problem = require('../292-nim-game.js');

describe('292-nim-game', function() {
  it('works', function() {
    expect(problem(1)).toEqual(true);
    expect(problem(2)).toEqual(true);
    expect(problem(3)).toEqual(true);
    expect(problem(4)).toEqual(false);
    expect(problem(6)).toEqual(true);
    expect(problem(7)).toEqual(true);
    expect(problem(8)).toEqual(false);
    expect(problem(128)).toEqual(false);
    expect(problem(129)).toEqual(true);
    expect(problem(130)).toEqual(true);
  });
});
