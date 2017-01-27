var problem = require('../027-remove-element');

describe('027-remove-element', function() {
  it('works for [3, 2, 2, 3] with value 3', function() {
    expect(problem([3, 2, 2, 3], 3)).toEqual(2);
  });

  it('works for [] with value 3', function() {
    expect(problem([], 3)).toEqual(0);
  });
});
