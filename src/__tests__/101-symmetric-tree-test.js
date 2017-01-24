var TreeNode = require('../utils/TreeNode');
var problem = require('../101-symmetric-tree');

describe('101-symmetric-tree', function() {
  it('works for testcase 1', function() {
    var root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.right.right = new TreeNode(3);
    root.right.left = new TreeNode(4);
    root.left.right = new TreeNode(4);

    expect(problem(root)).toBeTruthy();
  });

  it('works for testcase 2', function() {
    var root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.right = new TreeNode(3);
    root.right.right = new TreeNode(3);

    expect(problem(root)).toBeFalsy();
  });
});
