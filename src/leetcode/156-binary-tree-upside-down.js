/*
 * https://leetcode.com/problems/binary-tree-upside-down/
 *
 * 156. Binary Tree Upside Down
 *
 * Given a binary tree where all the right nodes are either leaf nodes with a sibling
 * (a left node that shares the same parent node) or empty, flip it upside down and turn
 * it into a tree where the original right nodes turned into left leaf nodes. Return the new root.
 *
 * For example:
 * Given a binary tree {1,2,3,4,5},
 *     1
 *    / \
 *   2   3
 *  / \
 * 4   5
 *
 * return the root of the binary tree [4,5,2,#,#,3,1].
 *    4
 *   / \
 *  5   2
 *     / \
 *    3   1
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 *
 * var upsideDownBinaryTree = function(root) {
 *
 * };
 */

module.exports = function(root) {
  if (!root || !root.left) { return root; }

  var queue = [root];
  var next = root.left;
  var prev;
  var newRoot;

  while (next) {
    queue.push(next);
    next = next.left;
  }

  next = newRoot = queue.pop();

  while (queue.length) {
    prev = queue.pop();
    next.left = prev.right;
    next.right = prev;
    next = prev;
  }

  prev.left = null;
  prev.right = null;

  return newRoot;
};
