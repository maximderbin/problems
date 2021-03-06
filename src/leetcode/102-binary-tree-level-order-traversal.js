/*
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 *
 * 102. Binary Tree Level Order Traversal
 *
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
 *
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * return its level order traversal as:
 * [
 *   [3],
 *   [9,20],
 *   [15,7]
 * ]
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 * @param {TreeNode} root
 * @return {number[][]}
 *
 * var levelOrder = function(root) {
 *
 * };
 */

module.exports = function(root) {
  if (!root) { return []; }

  var result = [];
  var queue = [];

  queue.push(root);

  while (queue.length) {
    var levelSize = queue.length;
    var levelResult = [];

    for (var i = 0; i < levelSize; i++) {
      var cur = queue.shift();

      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
      levelResult.push(cur.val);
    }

    result.push(levelResult);
  }

  return result;
};
