var problem = require('../367-valid-perfect-square');

describe('367-valid-perfect-square', function() {
  it('works', function() {
    expect(problem(16)).toBeTruthy();
    expect(problem(14)).toBeFalsy();
  });
});
