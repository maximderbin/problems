var problem = require('../311-sparse-matrix-multiplication');

describe('311-sparse-matrix-multiplication', function() {
  it('works for testcase 1', function() {
    var A = [
      [ 1, 0, 0 ],
      [-1, 0, 3 ]
    ];

    var B = [
      [ 7, 0, 0 ],
      [ 0, 0, 0 ],
      [ 0, 0, 1 ]
    ];

    var result = [
      [ 7, 0, 0 ],
      [-7, 0, 3 ]
    ];

    expect(problem(A, B)).toEqual(result);
  });

  it('works for testcase 2', function() {
    var A = [
      [ 1, -5 ]
    ];

    var B = [
      [12],
      [-1]
    ];

    var result = [
      [17]
    ];

    expect(problem(A, B)).toEqual(result);
  });
});
