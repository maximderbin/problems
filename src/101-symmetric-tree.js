/*
 * https://leetcode.com/problems/symmetric-tree/
 *
 * 101. Symmetric Tree
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 *
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 *
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 *
 * But the following [1,2,2,null,3,null,3] is not:
 *     1
 *    / \
 *   2   2
 *    \   \
 *    3    3
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 * @param {TreeNode} root
 * @return {boolean}
 *
 * var isSymmetric = function(root) {
 *
 * };
 */

module.exports = function(root) {
  if (root === null) { return true }

  var queue = [];
  var result = true;

  queue.push(root.left);
  queue.push(root.right);

  while (queue.length) {
    var left = queue.shift();
    var right = queue.shift();

    if (
      (left.left && left.left.val) === (right.right && right.right.val) ||
      (left.right && left.right.val) === (right.left && right.left.val)
    ) {
      left.left && queue.push(left.left);
      right.right && queue.push(right.right);
      left.right && queue.push(left.right);
      right.left && queue.push(right.left);
    } else {
      result = false;
    }
  }

  return result;
};
