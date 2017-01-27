var problem = require('../245-shortest-word-distance-iii');

describe('245-shortest-word-distance-iii', function() {
  it('works', function() {
    var words = ['practice', 'makes', 'perfect', 'coding', 'makes'];

    expect(problem(words, 'makes', 'coding')).toEqual(1);
    expect(problem(words, 'makes', 'makes')).toEqual(3);
  });
});
