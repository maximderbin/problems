/**
 *
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
 *  @param {number} n
 *  @return {boolean}
 *
 * var maxArea = function(height) {
 *
 * };
 */

module.exports = function canWinNim(n) {
  if (n >= 100000000) { // too big :(
    return n % 4 != 0;
  }

  var solutions = [true, true, true, false];

  for (var i = 4; i < n; i++) {
    for (var j = 1; j < 4; j++) {
      if (!solutions[i - j]) {
        solutions[i] = true;
      }
    }
  }

  return !!solutions[n - 1];
};