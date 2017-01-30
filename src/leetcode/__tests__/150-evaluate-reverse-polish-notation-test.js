var problem = require('../150-evaluate-reverse-polish-notation');

describe('150-evaluate-reverse-polish-notation', function() {
  it('works', function() {
    expect(problem(['2', '1', '+', '3', '*'])).toEqual(9);
    expect(problem(['4', '13', '5', '/', '+'])).toEqual(6.6);
  });
});
