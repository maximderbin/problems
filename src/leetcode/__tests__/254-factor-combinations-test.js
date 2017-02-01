var problem = require('../254-factor-combinations');

describe('254-factor-combinations', function() {
  test('works', function() {
    expect(problem(1)).toEqual([]);

    expect(problem(37)).toEqual([]);

    expect(problem(12)).toEqual([
      [2, 6],
      [2, 2, 3],
      [3, 4],
    ]);

    expect(problem(32)).toEqual([
      [2, 16],
      [2, 2, 8],
      [2, 2, 2, 4],
      [2, 2, 2, 2, 2],
      [2, 4, 4],
      [4, 8],
    ]);
  });
});
