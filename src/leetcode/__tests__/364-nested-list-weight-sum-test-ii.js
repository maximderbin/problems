var problem = require('../364-nested-list-weight-sum-ii');
var NestedInteger = function(val) {
  this.val = val;

  this.isInteger = function() {
    return this.val === parseInt(this.val, 10);
  };

  this.getInteger = function() {
    return this.val;
  };

  this.add = function(elem) {
    this.val = elem;
  };

  this.getList = function() {
    return this.val;
  };
};

describe('339-nested-list-weight-sum', function() {
  test('[[1,1],2,[1,1]], return 8', function() {
    var item00 = new NestedInteger(1);
    var item01 = new NestedInteger(1);
    var item1 = new NestedInteger(2);
    var item20 = new NestedInteger(1);
    var item21 = new NestedInteger(1);
    var item0 = new NestedInteger([item00, item01]);
    var item2 = new NestedInteger([item20, item21]);
    var nestedList = [item0, item1, item2];

    expect(problem(nestedList)).toEqual(8);
  });

  test('[1,[4,[6]]], return 17', function() {
    var item0 = new NestedInteger(1);
    var item10 = new NestedInteger(4);
    var item110 = new NestedInteger(6);
    var item11 = new NestedInteger([item110]);
    var item1 = new NestedInteger([item10, item11]);
    var nestedList = [item0, item1];

    expect(problem(nestedList)).toEqual(17);
  });

  test('[[[8],4]], return 16', function() {
    var item000 = new NestedInteger(8);
    var item00 = new NestedInteger([item000]);
    var item01 = new NestedInteger(4);
    var item0 = new NestedInteger([item00, item01]);
    var nestedList = [item0];

    expect(problem(nestedList)).toEqual(16);
  });

  test('[[-1],[[-1]]], return -3', function() {
    var item00 = new NestedInteger(-1);
    var item0 = new NestedInteger([item00]);
    var item100 = new NestedInteger(-1);
    var item10 = new NestedInteger([item100]);
    var item1 = new NestedInteger([item10]);
    var nestedList = [item0, item1];

    expect(problem(nestedList)).toEqual(-3);
  });
});
