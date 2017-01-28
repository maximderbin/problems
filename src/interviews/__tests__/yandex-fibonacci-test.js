var problem = require('../yandex-fibonacci');

describe('yandex-fibonacci', function() {
  it('works', function() {
    expect(problem(1)).toEqual(1);
    expect(problem(2)).toEqual(1);
    expect(problem(3)).toEqual(2);
    expect(problem(4)).toEqual(3);
    expect(problem(5)).toEqual(5);
    expect(problem(6)).toEqual(8);
  });
});
