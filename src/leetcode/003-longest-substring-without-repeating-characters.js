/* * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * 3. Longest Substring Without Repeating Characters
 *
 * Given a string, find the length of the longest substring without repeating characters.
 *
 *   Examples:
 *
 *   Given "abcabcbb", the answer is "abc", which the length is 3.
 *
 *   Given "bbbbb", the answer is "b", with the length of 1.
 *
 *   Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * @param {string} s
 * @return {number}
 *
 * var lengthOfLongestSubstring = function(s) {
 *
 * };
 */

module.exports = function lengthOfLongestSubstring(str) {
  var hash = {};
  var left = 0;
  var maxLen = 0;

  str.split('').forEach(function(char, i) {
    if (hash[char]) {
      left = Math.max(hash[char], left);
    }

    hash[char] = i + 1;
    maxLen = Math.max(maxLen, i + 1 - left);
  });

  return maxLen;
};
