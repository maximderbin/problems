var problem = require('../033-search-in-rotated-sorted-array');

describe('033-search-in-rotated-sorted-array', function() {
  it('works', function() {
    expect(problem([4, 5, 6, 7, 0, 1, 2], 4)).toEqual(0);
    expect(problem([4, 5, 6, 7, 0, 1, 2], 5)).toEqual(1);
    expect(problem([4, 5, 6, 7, 0, 1, 2], 6)).toEqual(2);
    expect(problem([4, 5, 6, 7, 0, 1, 2], 7)).toEqual(3);
    expect(problem([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
    expect(problem([4, 5, 6, 7, 0, 1, 2], 1)).toEqual(5);
    expect(problem([4, 5, 6, 7, 0, 1, 2], 2)).toEqual(6);
    expect(problem([4, 5, 6, 7, 0, 1, 2], 8)).toEqual(-1);
  });
});
