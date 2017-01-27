var problem = require('../125-valid-palindrome');

describe('125-valid-palindrome', function() {
  it('works', function() {
    expect(problem('A man, a plan, a canal: Panama')).toBeTruthy();
    expect(problem('race a car')).toBeFalsy();
  });
});
