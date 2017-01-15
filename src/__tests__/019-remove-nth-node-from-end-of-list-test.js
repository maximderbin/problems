var problem = require('../019-remove-nth-node-from-end-of-list');
var ListNode = require('../utils/ListNode');

describe('019-remove-nth-node-from-end-of-list', function() {
  it('works for 1->2->3->4->5, and n = 2', function() {
    var head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    var result = problem(head, 2);

    expect(result.val).toEqual(1);
    expect(result.next.val).toEqual(2);
    expect(result.next.next.val).toEqual(3);
    expect(result.next.next.next.val).toEqual(5);
    expect(result.next.next.next.next).toBeNull();
  });

  it('works for 1, and n = 1', function() {
    var head = new ListNode(1);

    var result = problem(head, 1);

    expect(result).toBeNull();
  });

  it('works for 1->2, and n = 2', function() {
    var head = new ListNode(1);
    head.next = new ListNode(2);

    var result = problem(head, 2);

    expect(result.val).toEqual(2);
    expect(result.next).toBeNull();
  });

  it('works for 1->2, and n = 1', function() {
    var head = new ListNode(1);
    head.next = new ListNode(2);

    var result = problem(head, 1);

    expect(result.val).toEqual(1);
    expect(result.next).toBeNull();
  });
});
