var TreeNode = require('../utils/TreeNode');
var problem = require('../156-binary-tree-upside-down');

describe('156-binary-tree-upside-down', function() {
  it('works for {1,2,3,4,5}', function() {
    var root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);

    var result = problem(root);

    expect(result.val).toEqual(4);
    expect(result.left.val).toEqual(5);
    expect(result.left.left).toBeNull();
    expect(result.left.right).toBeNull();
    expect(result.right.val).toEqual(2);
    expect(result.right.left.val).toEqual(3);
    expect(result.right.left.left).toBeNull();
    expect(result.right.left.right).toBeNull();
    expect(result.right.right.val).toEqual(1);
    expect(result.right.right.left).toBeNull();
    expect(result.right.right.right).toBeNull();
  });

  it('works for {1}', function() {
    var root = new TreeNode(1);
    var result = problem(root);

    expect(result.val).toEqual(1);
    expect(result.left).toBeNull();
    expect(result.right).toBeNull();
  });

  it('works for {}', function() {
    var result = problem(null);

    expect(result).toBeNull();
  });
});
