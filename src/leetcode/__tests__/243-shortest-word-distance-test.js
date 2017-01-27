var problem = require('../243-shortest-word-distance');

describe('243-shortest-word-distance', function() {
  it('works for testcase 1', function() {
    var words = ['practice', 'makes', 'perfect', 'coding', 'makes'];

    expect(problem(words, 'coding', 'practice')).toEqual(3);
    expect(problem(words, 'makes', 'coding')).toEqual(1);
  });

  it('works for testcase 2', function() {
    var words = ['a', 'c', 'b', 'a'];

    expect(problem(words, 'a', 'b')).toEqual(1);
    expect(problem(words, 'b', 'a')).toEqual(1);
  });
});
