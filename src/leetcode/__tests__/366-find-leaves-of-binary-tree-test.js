var TreeNode = require('../utils/TreeNode');
var problem = require('../366-find-leaves-of-binary-tree');

describe('366-find-leaves-of-binary-tree', function() {
  it('works', function() {
    var root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);

    expect(problem(root)).toEqual([[4, 5, 3], [2], [1]]);
  });
});
