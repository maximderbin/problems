var ListNode = require('../utils/ListNode');
var problem = require('../206-reverse-linked-list');

describe('206-reverse-linked-list', function() {
  it('works', function() {
    var head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    var result = problem(head);

    expect(result.val).toEqual(5);
    expect(result.next.val).toEqual(4);
    expect(result.next.next.val).toEqual(3);
    expect(result.next.next.next.val).toEqual(2);
    expect(result.next.next.next.next.val).toEqual(1);
  });
});
