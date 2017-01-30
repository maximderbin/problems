var problem = require('../053-maximum-subarray');

describe('053-maximum-subarray', function() {
  it('works', function() {
    expect(problem([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
    expect(problem([1])).toEqual(1);
    expect(problem([-2,-1])).toEqual(-1);
  });
});
