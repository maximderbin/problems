/*
 * https://leetcode.com/problems/isomorphic-strings/
 *
 * 205. Isomorphic Strings
 *
 * Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while preserving the order of characters.
 * No two characters may map to the same character but a character may map to itself.
 *
 * For example,
 * Given "egg", "add", return true.
 *
 * Given "foo", "bar", return false.
 *
 * Given "paper", "title", return true.
 *
 * Note:
 * You may assume both s and t have the same length.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * var isIsomorphic = function(s, t) {
 *
 * };
 */

module.exports = function(s, t) {
  var arrS = s.split('');
  var arrT = t.split('');
  var hashS = {};
  var hashT = {};
  var result = true;

  for (var i = 0; i < arrS.length; i++) {
    var curS = arrS[i];
    var curT = arrT[i];

    if (
      hashS[curS] && hashS[curS] !== curT ||
      hashT[curT] && hashT[curT] !== curS
    ) {
      result = false;
      break;
    } else {
      hashS[curS] = curT;
      hashT[curT] = curS;
    }
  }

  return result;
};
