/*
 * https://leetcode.com/problems/valid-palindrome/
 *
 * 125. Valid Palindrome
 *
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 *
 * For example,
 * "A man, a plan, a canal: Panama" is a palindrome.
 * "race a car" is not a palindrome.
 *
 * Note:
 * Have you consider that the string might be empty? This is a good question to ask during an interview.
 *
 * For the purpose of this problem, we define empty string as valid palindrome.
 *
 * @param {string} s
 * @return {boolean}
 *
 * var isPalindrome = function(s) {
 *
 * };
 */

module.exports = function(s) {
  s = s.toLowerCase().replace(/\W+/g, '');

  for (var i = 0, j = s.length - 1; i < j;) {
    if (s[i] !== s[j]) {
        return false;
    }
    i++;
    j--;
  }
  return true;
}
