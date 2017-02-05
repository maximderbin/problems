/*
 * https://leetcode.com/problems/sparse-matrix-multiplication/
 *
 * 311. Sparse Matrix Multiplication
 *
 * Given two sparse matrices A and B, return the result of AB.
 *
 * You may assume that A's column number is equal to B's row number.
 *
 * Example:
 *
 * A = [
 *   [ 1, 0, 0],
 *   [-1, 0, 3]
 * ]
 *
 * B = [
 *   [ 7, 0, 0 ],
 *   [ 0, 0, 0 ],
 *   [ 0, 0, 1 ]
 * ]
 *
 *      |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
 * AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
 *                   | 0 0 1 |
 *
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 *
 * var multiply = function(A, B) {
 *
 * };
 */

module.exports = function(A, B) {
  var C = [];

  for (var i = 0; i < A.length; i++) {
    for (var k = 0; k < A[0].length; k++) {
      if (A[i][k]) {
        for (var j = 0; j < B[0].length; j++) {
          C[i] = C[i] || [];
          C[i][j] = C[i][j] || 0;

          if (B[k][j]) {
            C[i][j] += A[i][k] * B[k][j];
          }
        }
      }
    }
  }

  return C;
};
