var problem = require('../088-merge-sorted-array');

describe('088-merge-sorted-array', function() {
  it('works for arrays with the same size', function() {
    var nums1 = [1, 5, 7, 9];
    var m = 4;
    var nums2 = [2, 3, 4, 6];
    var n = 4;

    problem(nums1, m, nums2, n);

    expect(nums1).toEqual([1, 2, 3, 4, 5, 6, 7, 9]);
  });

  it('works for arrays with different size', function() {
    var nums1 = [1, 5, 7, 9, 10];
    var m = 5;
    var nums2 = [2, 3, 4, 6];
    var n = 4;

    problem(nums1, m, nums2, n);

    expect(nums1).toEqual([1, 2, 3, 4, 5, 6, 7, 9, 10]);
  });
});
