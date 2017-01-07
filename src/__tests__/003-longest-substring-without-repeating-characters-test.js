var problem = require('../003-longest-substring-without-repeating-characters');

describe('003-longest-substring-without-repeating-characters', function() {
  it('works', function() {
    expect(problem('abcabcbb')).toEqual('abc');
    expect(problem('bbbbb')).toEqual('b');
    expect(problem('pwwkew')).toEqual('wke');
    expect(problem('c')).toEqual('c');
    expect(problem('aab')).toEqual('ab');
  });
});
