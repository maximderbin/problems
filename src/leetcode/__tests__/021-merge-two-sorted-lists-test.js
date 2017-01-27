var problem = require('../021-merge-two-sorted-lists');
var ListNode = require('../utils/ListNode');

describe('021-merge-two-sorted-lists', function() {
  it('works for 3->5->8->11->15, and 1->2->3->4', function() {
    var l1 = new ListNode(3);
    l1.next = new ListNode(5);
    l1.next.next = new ListNode(8);
    l1.next.next.next = new ListNode(11);
    l1.next.next.next.next = new ListNode(15);

    var l2 = new ListNode(1);
    l2.next = new ListNode(2);
    l2.next.next = new ListNode(3);
    l2.next.next.next = new ListNode(4);

    var result = problem(l1, l2);

    expect(result.val).toEqual(1);
    expect(result.next.val).toEqual(2);
    expect(result.next.next.val).toEqual(3);
    expect(result.next.next.next.val).toEqual(3);
    expect(result.next.next.next.next.val).toEqual(4);
    expect(result.next.next.next.next.next.val).toEqual(5);
    expect(result.next.next.next.next.next.next.val).toEqual(8);
    expect(result.next.next.next.next.next.next.next.val).toEqual(11);
    expect(result.next.next.next.next.next.next.next.next.val).toEqual(15);
    expect(result.next.next.next.next.next.next.next.next.next).toBeNull();
  });
});
