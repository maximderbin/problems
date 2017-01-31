var problem = require('../056-merge-intervals');

describe('056-merge-intervals', function() {
  it('works', function() {
    expect(problem([
      { start: 1 , end: 3  },
      { start: 2,  end: 6  },
      { start: 8,  end: 10 },
      { start: 15, end: 18 }
    ])).toEqual([
      { start: 1,  end: 6  },
      { start: 8,  end: 10 },
      { start: 15, end: 18 }
    ]);

    expect(problem([
      { start: 1, end: 4 },
      { start: 1, end: 4 }
    ])).toEqual([
      { start: 1, end: 4 }
    ]);

    expect(problem([
      { start: 1, end: 4 },
      { start: 0, end: 4 }
    ])).toEqual([
      { start: 0, end: 4 }
    ]);
  });
});
