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
  this.words = {};

  for(var i = 0; i < words.length; i++) {
    word = words[i];

    if(this.words[word]) {
      this.words[word].push(i);
    } else {
      this.words[word] = [i];
    }
  }
};

WordDistance.createNew = function(words) {
  return new WordDistance(words);
};

WordDistance.prototype.shortest = function(word1, word2) {
  var list1 = this.words[word1];
  var list2 = this.words[word2];
  var minDistance = Infinity;

  for (var i = 0, j = 0; i < list1.length && j < list2.length;) {
    var index1 = list1[i];
    var index2 = list2[j];

    if(index1 < index2) {
      minDistance = Math.min(minDistance, index2 - index1);
      i++;
    } else {
      minDistance = Math.min(minDistance, index1 - index2);
      j++;
    }
  }

  return minDistance;
};

module.exports = WordDistance;
