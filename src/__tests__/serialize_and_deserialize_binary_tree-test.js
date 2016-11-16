var TreeNode = require('../utils/TreeNode');
var serializeAndDeserializeBinaryTree = require('../serialize_and_deserialize_binary_tree');
var serialize = serializeAndDeserializeBinaryTree.serialize;
var deserialize = serializeAndDeserializeBinaryTree.deserialize;

describe('serialize and deserialize binary tree', function() {
  it('serializes binary tree', function() {
    describe('when TreeNode passed as argument', function() {
      /**
       *     1
       *    / \
       *   2   3
       *      / \
       *     4   5
       */

      var root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
      root.right.left = new TreeNode(4);
      root.right.right = new TreeNode(5);

      expect(serialize(root)).toEqual('1,2,3,,,4,5,,,,');
    });

    describe('when null passed as argument', function() {
      expect(serialize(null)).toEqual('');
    });
  });

  it('deserializes binary tree', function() {
    describe('when serialized tree string passed as argument', function() {
      var root = deserialize('1,2,3,,,4,5,,,,');

      expect(root).toBeInstanceOf(TreeNode);
      expect(root.val).toEqual(1);
      expect(root.left).toBeInstanceOf(TreeNode);
      expect(root.left.val).toEqual(2);
      expect(root.right).toBeInstanceOf(TreeNode);
      expect(root.right.val).toEqual(3);
      expect(root.left.left).toBeNull();
      expect(root.left.right).toBeNull();
      expect(root.right.left).toBeInstanceOf(TreeNode);
      expect(root.right.left.val).toEqual(4);
      expect(root.right.right).toBeInstanceOf(TreeNode);
      expect(root.right.right.val).toEqual(5);
      expect(root.right.left.left).toBeNull();
      expect(root.right.left.right).toBeNull();
      expect(root.right.right.left).toBeNull();
      expect(root.right.right.right).toBeNull();
    });

    describe('when blank string passed as argument', function() {
      expect(deserialize('')).toBeNull();
    });
  });
});
