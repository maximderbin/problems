/*
 * https://leetcode.com/problems/shortest-word-distance/
 *
 * 243. Shortest Word Distance
 *
 * Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.
 *
 * For example,
 * Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
 *
 * Given word1 = “coding”, word2 = “practice”, return 3.
 * Given word1 = "makes", word2 = "coding", return 1.
 *
 * Note:
 * You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
 *
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 *
 * var shortestDistance = function(words, word1, word2) {
 *
 * };
 */

module.exports = function(words, word1, word2) {
  var minDistance = words.length;

  for (var i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      for (var j = 0; j < words.length; j++) {
        if (j !== i && words[j] === word2) {
          minDistance = Math.min(minDistance, Math.abs(i - j));
        }
      }
    }
  }

  return minDistance;
};
