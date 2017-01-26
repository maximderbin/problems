var TreeNode = require('../utils/TreeNode');
var problem = require('../104-maximum-depth-of-binary-tree');

describe('104-maximum-depth-of-binary-tree', function() {
  it('works for {1,2,3,4,5}', function() {
    var root = new TreeNode(1);
    root.left = new TreeNode(2)
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);

    expect(problem(root)).toEqual(3);
  });

  it('works for {1,null,2}', function() {
    var root = new TreeNode(1);
    root.right = new TreeNode(2);

    expect(problem(root)).toEqual(2);
  });

  it('works for {}', function() {
    expect(problem(null)).toEqual(0);
  });
});
