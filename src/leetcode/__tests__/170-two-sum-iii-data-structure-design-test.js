var problemClasses = require('../170-two-sum-iii-data-structure-design');
// var TwoSumFastWrite = problemClasses.TwoSumFastWrite;
// var TwoSumFastRead = problemClasses.TwoSumFastRead;

describe('170-two-sum-iii-data-structure-design', function() {
  Object.keys(problemClasses).forEach(function(className) {
    describe(className, function() {
      var klass = problemClasses[className];

      it('works for testcase 1', function() {
        var problem = Object.create(klass).createNew();

        problem.add(1);
        problem.add(3);
        problem.add(5);

        expect(problem.find(4)).toBeTruthy();
        expect(problem.find(7)).toBeFalsy();
      });

      it('works for testcase 2', function() {
        var problem = Object.create(klass).createNew();

        problem.add(1);

        expect(problem.find(1)).toBeFalsy();
      });

      it('works for testcase 3', function() {
        var problem = Object.create(klass).createNew();

        problem.add(0);
        problem.add(0);

        expect(problem.find(0)).toBeTruthy();
      });

      it('works for testcase 4', function() {
        var problem = Object.create(klass).createNew();

        problem.add(0);

        expect(problem.find(0)).toBeFalsy();
      });

      it('works for testcase 5', function() {
        var problem = Object.create(klass).createNew();

        problem.add(0);
        problem.add(-1);
        problem.add(1);

        expect(problem.find(0)).toBeTruthy();
      });

      it('works for testcase 6', function() {
        var problem = Object.create(klass).createNew();

        problem.add(3);
        problem.add(2);
        problem.add(1);

        expect(problem.find(2)).toBeFalsy();
        expect(problem.find(3)).toBeTruthy();
        expect(problem.find(4)).toBeTruthy();
        expect(problem.find(5)).toBeTruthy();
        expect(problem.find(6)).toBeFalsy();
      });

      it('works for testcase 7', function() {
        var problem = Object.create(klass).createNew();

        problem.add(0);
        problem.add(-1);
        problem.add(-1);
        problem.add(0);

        expect(problem.find(-2)).toBeTruthy();
        expect(problem.find(0)).toBeTruthy();
        expect(problem.find(-1)).toBeTruthy();
        expect(problem.find(1)).toBeFalsy();
      });
    });
  });
});
