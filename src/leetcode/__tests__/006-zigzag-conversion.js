var problem = require('../006-zigzag-conversion.js');

describe('006-zigzag-conversion', function() {
  it('works', function() {
    expect(problem('', 100)).toEqual('');
    expect(problem('AB', 2)).toEqual('AB');
    expect(problem('ABC', 2)).toEqual('ACB');
    expect(problem('ABCD', 1)).toEqual('ABCD');
    expect(problem('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR');

    expect(problem(
      'yjekrhffcydkjbsnphyrdfcciphajkojvsunbzsezyqiblvquvjxbobjdjjovzyrruettyzswraxexqyszyvnzgsirjeq', 67
    )).toEqual(
      'yjekrhffcydkjbsnphyrdfcciphajkojvsunbzsezqyeqjirbilsvgqzunvvjyxzbsoybqjxdejxjaorvwzsyzryrtute'

    );
    expect(problem(
      'ljjhjhxuhltwjinsvadxnfngnhytncaynlixtfrasnwbxlvtlysaffgumhqzjqaydkvwppyjcxmzihuuhmwor', 19
    )).toEqual(
      'ltcjxfjxjirymhlapzjnspihynwhxawvuucbkuhnxdhltlymtyvawwhtqojnljrigyznnsqsfahvnfmaxfudg'
    );
  });
});
