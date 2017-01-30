var TreeNode = require('../utils/TreeNode');
var problem = require('../103-binary-tree-zigzag-level-order-traversal');

describe('103-binary-tree-zigzag-level-order-traversal', function() {
  it('works', function() {
    var root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    var result = [
      [3],
      [20, 9],
      [15, 7]
    ];

    expect(problem(root)).toEqual(result);
  });
});
