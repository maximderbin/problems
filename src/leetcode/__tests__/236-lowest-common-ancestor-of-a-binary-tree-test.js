var TreeNode = require('../utils/TreeNode');
var problem = require('../236-lowest-common-ancestor-of-a-binary-tree');

describe('236-lowest-common-ancestor-of-a-binary-tree', function() {
  it('works', function() {
    var root = new TreeNode(3);
    var node1 = root.right = new TreeNode(1);
    var node5 = root.left = new TreeNode(5);
    var node8 = root.right.right = new TreeNode(8);
    var node0 = root.right.left = new TreeNode(0);
    var node2 = root.left.right = new TreeNode(2);
    var node6 = root.left.left = new TreeNode(6);
    var node4 = root.left.right.right = new TreeNode(4);
    var node7 = root.left.right.left = new TreeNode(7);

    expect(problem(root, node5, node1)).toEqual(root);
    expect(problem(root, node5, node4)).toEqual(node5);
  });
});
