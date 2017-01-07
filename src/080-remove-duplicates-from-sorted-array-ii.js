/*
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 *
 * 80. Remove Duplicates from Sorted Array II
 *
 * Follow up for "Remove Duplicates":
 * What if duplicates are allowed at most twice?
 *
 * For example,
 * Given sorted array nums = [1,1,1,2,2,3],
 *
 * Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3.
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

    if (hash[cur] === undefined || hash[cur] < 2) {
      nums[i] = nums[j];
      hash[cur] ? ++hash[cur] : hash[cur] = 1;
      i++;
    }
  }

  nums.length = i;
}
