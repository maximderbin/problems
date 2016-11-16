/**
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 *
 * 297. Serialize and Deserialize Binary Tree
 *
 * Serialization is the process of converting a data structure or object
 * into a sequence of bits so that it can be stored in a file or memory buffer,
 * or transmitted across a network connection link to be reconstructed later
 * in the same or another computer environment.
 *
 * Design an algorithm to serialize and deserialize a binary tree.
 * There is no restriction on how your serialization/deserialization algorithm
 * should work. You just need to ensure that a binary tree can be serialized
 * to a string and this string can be deserialized to the original tree structure.
 *
 * For example, you may serialize the following tree
 *
 *     1
 *    / \
 *   2   3
 *      / \
 *     4   5
 *
 * as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary tree.
 * You do not necessarily need to follow this format, so please be creative and come up
 * with different approaches yourself.
 *
 * Note: Do not use class member/global/static variables to store states.
 * Your serialize and deserialize algorithms should be stateless.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 *
 * var serialize = function(root) {
 *
 * };
 */

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 *
 * var deserialize = function(data) {
 *
 * };
 */

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

var TreeNode = require('./utils/TreeNode');

var serialize = function(root) {
    if(!root) {
        return '';
    }

    var queue = [];
    var result = [];

    queue.push(root);

    while(queue.length !== 0) {
        var top = queue.shift();

        if(top !== null) {
            result.push(top.val);
            queue.push(top.left);
            queue.push(top.right);
        } else {
            result.push(null);
        }
    }

    return result.join(',');
};

var deserialize = function(data) {
    if (data === '') {
        return null;
    }

    data = data.split(',');
    var queue = [];
    var root = new TreeNode(+data.shift());

    queue.push(root);

    while (queue.length !== 0) {
        var top = queue.shift();
        var leftData = data.shift();
        var rightData = data.shift();

        if (leftData && leftData !== null) {
            top.left = new TreeNode(+leftData);
            queue.push(top.left);
        }

        if (rightData && rightData !== null) {
            top.right = new TreeNode(+rightData);
            queue.push(top.right);
        }
    }

    return root;
};

module.exports = {
  serialize: serialize,
  deserialize: deserialize,
}
