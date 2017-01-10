var problem = require('../003-longest-substring-without-repeating-characters');

describe('003-longest-substring-without-repeating-characters', function() {
  it('works', function() {
    expect(problem('abcabcbb')).toEqual(3);
    expect(problem('bbbbb')).toEqual(1);
    expect(problem('pwwkew')).toEqual(3);
    expect(problem('c')).toEqual(1);
    expect(problem('aab')).toEqual(2);
    expect(problem('dvda')).toEqual(3);
  });
});
