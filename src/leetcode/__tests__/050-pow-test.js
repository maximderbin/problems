var problem = require('../050-pow');

describe('050-pow', function() {
  it('works for 8.88023, 3', function() {
    expect(problem(8.88023, 3)).toEqual(700.28148);
  });

  it('works for 34.00515, -3', function() {
    expect(problem(34.00515, -3)).toEqual(0.00003);
  });
});
