var problem = require('../080-remove-duplicates-from-sorted-array-ii');

describe('080-remove-duplicates-from-sorted-array-ii', function() {
  [
    [[1, 1, 1, 2, 2, 3], [1, 1, 2, 2, 3]],
    [[1, 1, 2, 2, 2, 3], [1, 1, 2, 2, 3]],
    [[1, 2, 3], [1, 2, 3]],
    [[], []]
  ].forEach(function(example) {
    var input = example[0];
    var output = example[1];

    it('works for [' + input.toString() + ']', function() {
      problem(input);

      expect(input).toEqual(output);
    });
  });
});
