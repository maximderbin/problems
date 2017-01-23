var problem = require('../205-isomorphic-strings');

describe('205-isomorphic-strings', function() {
  it('works', function() {
    expect(problem('egg', 'add')).toBeTruthy();
    expect(problem('foo', 'bar')).toBeFalsy();
    expect(problem('paper', 'title')).toBeTruthy();
    expect(problem('', '')).toBeTruthy();
    expect(problem('ab', 'aa')).toBeFalsy();
  });
});
