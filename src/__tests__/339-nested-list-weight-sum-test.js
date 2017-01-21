var NestedInteger = require('../utils/NestedInteger');
var problem = require('../339-nested-list-weight-sum');

describe('339-nested-list-weight-sum', function() {
  test('[[1,1],2,[1,1]], return 10', function() {
    var item00 = new NestedInteger(1);
    var item01 = new NestedInteger(1);
    var item1 = new NestedInteger(2);
    var item20 = new NestedInteger(1);
    var item21 = new NestedInteger(1);
    var item0 = new NestedInteger([item00, item01]);
    var item2 = new NestedInteger([item20, item21]);
    var nestedList = [item0, item1, item2];

    expect(problem(nestedList)).toEqual(10);
  });

  test('[1,[4,[6]]], return 27', function() {
    var item0 = new NestedInteger(1);
    var item10 = new NestedInteger(4);
    var item110 = new NestedInteger(6);
    var item11 = new NestedInteger([item110]);
    var item1 = new NestedInteger([item10, item11]);
    var nestedList = [item0, item1];

    expect(problem(nestedList)).toEqual(27);
  });
});
