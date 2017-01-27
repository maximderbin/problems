var problem = require('../083-remove-duplicates-from-sorted-list');
var ListNode = require('../utils/ListNode');

describe('083-remove-duplicates-from-sorted-list', function() {
  it('works for null', function() {
    expect(problem(null)).toBeNull();
  });

  it('works for undefined', function() {
    expect(problem(undefined)).toBeUndefined();
  });

  it('works for 1->1->2', function() {
    var head = new ListNode(1);
    head.next = new ListNode(1);
    head.next.next = new ListNode(2);

    problem(head);

    expect(head.val).toEqual(1);
    expect(head.next.val).toEqual(2);
    expect(head.next.next).toBeNull();
  });

  it('works for 1->1->2->3->3', function() {
    var head = new ListNode(1);
    head.next = new ListNode(1);
    head.next.next = new ListNode(2);
    head.next.next.next = new ListNode(3);
    head.next.next.next.next = new ListNode(3);

    problem(head);

    expect(head.val).toEqual(1);
    expect(head.next.val).toEqual(2);
    expect(head.next.next.val).toEqual(3);
    expect(head.next.next.next).toBeNull();
  });

  it('works for 1->1->1', function() {
    var head = new ListNode(1);
    head.next = new ListNode(1);
    head.next.next = new ListNode(1);

    problem(head);

    expect(head.val).toEqual(1);
    expect(head.next).toBeNull();
  });
});
