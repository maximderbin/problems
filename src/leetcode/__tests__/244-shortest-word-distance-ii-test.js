var WordDistance = require('../244-shortest-word-distance-ii');

describe('244-shortest-word-distance-ii', function() {
  it('works for testcase 1', function() {
    var obj = Object
      .create(WordDistance)
      .createNew(['practice', 'makes', 'perfect', 'coding', 'makes']);

    expect(obj.shortest('coding', 'practice')).toEqual(3);
    expect(obj.shortest('makes', 'coding')).toEqual(1);
  });

  it('works for testcase 2', function() {
    var obj = Object
      .create(WordDistance)
      .createNew(['a', 'c', 'b', 'a']);

    expect(obj.shortest('a', 'b')).toEqual(1);
    expect(obj.shortest('b', 'a')).toEqual(1);
  });

  it('works for testcase 3', function() {
    var obj = Object
      .create(WordDistance)
      .createNew(['a', 'a', 'b', 'b']);

    expect(obj.shortest('a', 'b')).toEqual(1);
    expect(obj.shortest('b', 'a')).toEqual(1);
  });
});
