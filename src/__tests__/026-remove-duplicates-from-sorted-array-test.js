var problem = require('../026-remove-duplicates-from-sorted-array');

describe('026-remove-duplicates-from-sorted-array', function() {
  [
    [[1, 2, 2], [1, 2]],
    [[1, 1, 2], [1, 2]],
    [[1], [1]],
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
