var problem = require('../facebook-sort-array-by-array-of-indexes');

describe('facebook-sort-array-by-array-of-indexes', function() {
  it('works', function() {
    expect(problem(
      ['A', 'B', 'C', 'D'],
      [2, 1, 3, 0]
    )).toEqual(['C', 'B', 'D', 'A']);
  });
});
