var WordDistance = require('../244-shortest-word-distance-ii');

describe('244-shortest-word-distance-ii', function() {
  it('works', function() {
    var obj = Object
      .create(WordDistance)
      .createNew(['practice', 'makes', 'perfect', 'coding', 'makes']);

    expect(obj.shortest('coding', 'practice')).toEqual(3);
    expect(obj.shortest('makes', 'coding')).toEqual(1);
  });
});
