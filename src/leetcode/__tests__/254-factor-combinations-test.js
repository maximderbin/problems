var problem1 = require('../254-factor-combinations');
var problem2 = require('../254-factor-combinations-ii');

function testFactorCombis(problem) {
  return function() {
    test('works', function() {
      expect(problem(1)).toEqual([]);

      expect(problem(37)).toEqual([]);

      [
        [2, 2, 3],
        [2, 6],
        [3, 4],
      ].forEach(function(item) {
        expect(problem(12)).toContainEqual(item);
      });

      [
        [2, 2, 2, 2, 2],
        [2, 2, 2, 4],
        [2, 2, 8],
        [2, 4, 4],
        [2, 16],
        [4, 8],
      ].forEach(function(item) {
        expect(problem(32)).toContainEqual(item);
      });
    });
  };
}

describe('254-factor-combinations', testFactorCombis(problem1));
describe('254-factor-combinations', testFactorCombis(problem2));
