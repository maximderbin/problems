/*
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * 26. Remove Duplicates from Sorted Array
 *
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 *
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 *
 * For example,
 * Given input array nums = [1,1,2],
 *
 * Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
 * It doesn't matter what you leave beyond the new length.
 *
 * @param {number[]} nums
 * @return {number}
 *
 * var removeDuplicates = function(nums) {
 *
 * };
 */

module.exports = function(nums) {
  var i = 0;
  var hash = {};

  for (var j = 0; j < nums.length; j++) {
    var cur = nums[j];

    if (!hash[cur]) {
      nums[i] = nums[j];
      i++;
      hash[cur] = true;
    }
  }

  nums.length = i;
};
