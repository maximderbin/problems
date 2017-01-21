/*
 * 244. Shortest Word Distance II
 *
 * This is a follow up of Shortest Word Distance.
 * The only difference is now you are given the list of words and your method will be called repeatedly many times with different parameters.
 * How would you optimize it?
 *
 * Design a class which receives a list of words in the constructor,
 * and implements a method that takes two words word1 and word2 and return the shortest distance between these two words in the list.
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
 *
 * var WordDistance = function(words) {
 *
 * };
 *
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 *
 * WordDistance.prototype.shortest = function(word1, word2) {
 *
 * };
 *
 * Your WordDistance object will be instantiated and called as such:
 * var obj = Object.create(WordDistance).createNew(words)
 * var param_1 = obj.shortest(word1,word2)
 */
var WordDistance = function(words) {
  this.words = words;
};

WordDistance.createNew = function(words) {
  return new WordDistance(words);
};

WordDistance.prototype.shortest = function(word1, word2) {
  var word1idx = [];
  var word2idx = [];

  for (var i = 0; i < this.words.length; i++) {
    if (this.words[i] === word1) { word1idx.push(i) }
    if (this.words[i] === word2) { word2idx.push(i) }
  }

  return Math.abs(word1idx[word1idx.length - 1] - word2idx[0]);
};

module.exports = WordDistance;
