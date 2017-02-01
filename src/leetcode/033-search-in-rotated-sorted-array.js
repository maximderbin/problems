/*
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 *
 * 33. Search in Rotated Sorted Array
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 *
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 *
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 *
 * You may assume no duplicate exists in the array.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * var search = function(nums, target) {
 *
 * };
 */

module.exports = function(nums, target) {
  var n = nums.length;
  var lo = 0;
  var hi = n - 1;

  while (lo < hi) {
    var mid = (lo + hi) >> 1;

    if (nums[mid] > nums[hi]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  var rot = lo;
  lo = 0;
  hi = n - 1;

  while (lo <= hi) {
    var mid = (lo + hi) >> 1;
    var realmid = (mid + rot) % n;

    if (nums[realmid] === target) { return realmid; }

    if (nums[realmid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return -1;
};
