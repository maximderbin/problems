/*
 * https://leetcode.com/problems/factor-combinations/
 *
 * 254. Factor Combinations
 *
 * Numbers can be regarded as product of its factors. For example,
 *
 *   8 = 2 x 2 x 2;
 *     = 2 x 4.
 *
 * Write a function that takes an integer n and return all possible combinations of its factors.
 *
 * Note:
 *   You may assume that n is always positive.
 *   Factors should be greater than 1 and less than n.
 *
 * Examples:
 *   input: 1
 *   output:
 *   []
 *
 *   input: 37
 *   output:
 *   []
 *
 *   input: 12
 *   output:
 *   [
 *     [2, 6],
 *     [2, 2, 3],
 *     [3, 4]
 *   ]
 *
 *   input: 32
 *   output:
 *   [
 *     [2, 16],
 *     [2, 2, 8],
 *     [2, 2, 2, 4],
 *     [2, 2, 2, 2, 2],
 *     [2, 4, 4],
 *     [4, 8]
 *   ]
 *
 * @param {number} n
 * @return {number[][]}
 *
 * var getFactors = function(n) {
 *
 * };
 */

module.exports = function(n) {
  function recur(n, i, item, result) {
    while (i * i <= n) {
      if (n % i === 0) {
        result.push(item.concat([i, n/i]));
        recur(n/i, i, item.concat([i]), result);
      }
      i += 1;
    }

    return result;
  }

  return recur(n, 2, [], []);
};
