var problem = require('../256-paint-house');

describe('256-paint-house', function() {
  it('works for testcase 1', function() {
    var costs = [[], [], []];
    costs[0][0] = 100;
    costs[0][1] = 200;
    costs[0][2] = 300;

    costs[1][0] = 100;
    costs[1][1] = 200;
    costs[1][2] = 300;

    costs[2][0] = 100;
    costs[2][1] = 200;
    costs[2][2] = 300;

    expect(problem(costs)).toEqual(400);
  });

  it('works for testcase 2', function() {
    var costs = [[], [], [], [], []];
    costs[0][0] = 5;
    costs[0][1] = 8;
    costs[0][2] = 6;

    costs[1][0] = 19;
    costs[1][1] = 14;
    costs[1][2] = 13;

    costs[2][0] = 7;
    costs[2][1] = 5;
    costs[2][2] = 12;

    costs[3][0] = 14;
    costs[3][1] = 15;
    costs[3][2] = 17;

    costs[4][0] = 3;
    costs[4][1] = 20;
    costs[4][2] = 10;

    expect(problem(costs)).toEqual(43);
  });
});
