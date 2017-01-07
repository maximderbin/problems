/*
 * https://leetcode.com/problems/product-of-array-except-self/
 *
 * 238. Product of Array Except Self
 *
 * Given an array of n integers where n > 1, nums,
 * return an array output such that output[i] is equal
 * to the product of all the elements of nums except nums[i].
 *
 * Solve it without division and in O(n).
 *
 * For example, given [1,2,3,4], return [24,12,8,6].
 *
 * Follow up:
 *  Could you solve it with constant space complexity?
 *  (Note: The output array does not count as extra space for the purpose of space complexity analysis.)
 *
 * @param {number[]} nums
 * @return {number[]}
 *
 * var productExceptSelf = function(nums) {
 *
 * };
 */

module.exports = function(nums) {
  var output = [1];

  for (var i = 1; i < nums.length; i++) {
    output[i] = output[i - 1] * nums[i - 1];
  }

  var right = 1;
  for (var j = nums.length - 1; j >= 0; j--) {
    output[j] *= right;
    right *= nums[j];
  }

  return output;
}
