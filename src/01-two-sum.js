/**
 * https://leetcode.com/problems/two-sum/
 *
 * 1. Two Sum
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Example:
 *   Given nums = [2, 7, 11, 15], target = 9,
 *
 *   Because nums[0] + nums[1] = 2 + 7 = 9,
 *   return [0, 1].
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * var twoSum = function(nums, target) {
 *
 * };
 */

module.exports = function(nums, target) {
  var hash = {};
  var result = [];

  for (var i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      result[0] = hash[target - nums[i]];
      result[1] = i;
    }
    hash[nums[i]] = i;
  }

  return result;

