/*
 * https://leetcode.com/problems/powx-n://leetcode.com/problems/powx-n/
 *
 * 50. Pow(x, n)
 *
 * Implement pow(x, n).
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 *
 * var myPow = function(x, n) {
 *
 * };
 */

module.exports = function(x, n) {
  if (n === 0) { return 1 }
  if (n < 0) { n = -n; x = 1 / x }

  var result = 1;

  while (n > 0) {
    result *= x;
    --n;
  }

  return +result.toFixed(5);
};
