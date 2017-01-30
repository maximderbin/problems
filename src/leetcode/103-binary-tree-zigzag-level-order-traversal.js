/*
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 *
 * 103. Binary Tree Zigzag Level Order Traversal
 *
 * Given a binary tree, return the zigzag level order traversal of its nodes' values.
 * (ie, from left to right, then right to left for the next level and alternate between).
 *
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * return its zigzag level order traversal as:
 * [
 *   [3],
 *   [20,9],
 *   [15,7]
 * ]
 */

module.exports = function(root) {
  if (!root) { return []; }

  var result = [];
  var queue = [];
  var isLeftToRight = true;

  queue.push(root);

  while (queue.length) {
    var levelSize = queue.length;
    var levelResult = [];

    for (var i = 0; i < levelSize; i++) {
      var cur = queue.shift();

      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
      isLeftToRight ? levelResult.push(cur.val) : levelResult.unshift(cur.val);
    }

    result.push(levelResult);
    isLeftToRight = !isLeftToRight;
  }

  return result;
};
