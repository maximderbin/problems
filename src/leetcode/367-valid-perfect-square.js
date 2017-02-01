/*
 * https://leetcode.com/problems/valid-perfect-square/
 *
 * 367. Valid Perfect Square
 *
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.
 *
 * Note: Do not use any built-in library function such as sqrt.
 *
 * Example 1:
 *   Input: 16
 *   Returns: True
 *
 * Example 2:
 *   Input: 14
 *   Returns: False
 *
 * @param {number} num
 * @return {boolean}
 *
 * var isPerfectSquare = function(num) {
 *
 * };
 */

module.exports = function(num) {
  var i = 1;

  while (num > 0) {
    num -= i;
    i += 2;
  }

  return num === 0;
};
