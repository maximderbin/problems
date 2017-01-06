var problem = require('../283-move-zeros');

describe('283-move-zeros', function() {
  it('works', function() {
    var nums = [0, 1, 0, 3, 12];
    problem(nums);
    expect(nums).toEqual([1, 3, 12, 0, 0]);
  });
});
