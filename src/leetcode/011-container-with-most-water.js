/**
 * https://leetcode.com/problems/container-with-most-water/
 *
 * Given n non-negative integers a1, a2, ..., an,
 * where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints
 * of line i is at (i, ai) and (i, 0).
 *
 * Find two lines, which together with x-axis forms a container,
 * such that the container contains the most water.
 *
 * Note: You may not slant the container and n is at least 2.
 *
 *  @param {number[]} height
 *  @return {number}
 *
 * var maxArea = function(height) {
 *
 * };
 */

function getSpace(dots, left, right) {
  return Math.min(dots[left], dots[right]) * (right - left);
}

module.exports = function maxArea(dots) {
  var left = 0;
  var right = dots.length - 1;
  var max = getSpace(dots, left, right);

  while (right - left > 1) {
    dots[left] < dots[right] ? left++ : right--;
    max = Math.max(max, getSpace(dots, left, right));
  }

  return max;
};
