/*
 * https://leetcode.com/problems/powx-n/
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

module.exports = function myPow(x, n) {
  if (n === 0) { return 1; }

  if (n < 0) {
    n = -n;
    x = 1 / x;
  }

  return n % 2 === 0
    ? myPow(x * x, parseInt(n / 2))
    : x * myPow(x * x, parseInt(n / 2));
};
