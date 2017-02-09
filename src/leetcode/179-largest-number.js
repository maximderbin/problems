/*
 * https://leetcode.com/problems/largest-number/
 *
 * 179. Largest Number
 *
 * Given a list of non negative integers, arrange them such that they form the largest number.
 *
 * For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.
 *
 * Note: The result may be very large, so you need to return a string instead of an integer.
 *
 * @param {number[]} nums
 * @return {string}
 *
 * var largestNumber = function(nums) {
 *
 * };
 */

module.exports = function(nums) {
  var aux = nums.slice();
  var lo = 0;
  var hi = nums.length - 1;
  var mid = hi >> 1;

  var i = lo;
  var j = mid + 1;

  for (var k = lo; k <= hi; k++) {
    if (i > mid) {
      nums[k] = aux[j++];
    } else if (j > hi) {
      nums[k] = aux[i++];
    } else if (aux[j] < aux[i]) {
      nums[k] = aux[j++];
    } else {
      nums[k] = aux[i++];
    }
  }

  return nums;
};
