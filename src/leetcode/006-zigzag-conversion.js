/**
 * https://leetcode.com/problems/zigzag-conversion/
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern
 * on a given number of rows like this:
 * (you may want to display this pattern in a fixed font for better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 * string convert(string text, int nRows);
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 *
 *
 *  @param {string} s
 *  @param {number} numRows
 *  @return {string}
 *
 * var convert = function(s, numRows) {
 *
 * };
 */

module.exports = function convert(s, rows) {
  if (rows === 1) return s;

  var row = 0;
  var direction = 1;
  var res = Array.from(new Array(rows), function() { return []; });

  for (var i = 0; i < s.length; i++) {
    if (i % (rows - 1) === 0 && i !== 0) direction *= -1;
    res[row].push(s[i]);
    row += direction;
  }

  return res.reduce(function(arr, row) {
    return arr.concat(row);
  }, []).join('');
};

