/*
 * https://leetcode.com/problems/find-leaves-of-binary-tree/
 *
 * 366. Find Leaves of Binary Tree
 *
 * Given a binary tree, collect a tree's nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.
 *
 * Example:
 * Given binary tree
 *           1
 *          / \
 *         2   3
 *        / \
 *       4   5
 * Returns [4, 5, 3], [2], [1].
 *
 * Explanation:
 * 1. Removing the leaves [4, 5, 3] would result in this tree:
 *
 *           1
 *          /
 *         2
 * 2. Now removing the leaf [2] would result in this tree:
 *
 *           1
 * 3. Now removing the leaf [1] would result in the empty tree:
 *
 *           []
 * Returns [4, 5, 3], [2], [1].
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
 * var findLeaves = function(root) {
 *
 * };
 */

module.exports = function(root) {
  function recur(node, result) {
    if (node === null) { return -1; }

    var level = 1 + Math.max(recur(node.left, result), recur(node.right, result));

    if (result.length < level + 1) { result.push([]); }

    result[level].push(node.val);

    node.left = node.right = null;

    return level;
  }

  var result = [];
  recur(root, result);
  return result;
};
