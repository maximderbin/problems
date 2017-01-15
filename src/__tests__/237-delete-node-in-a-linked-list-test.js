var ListNode = require('../utils/ListNode');
var problem = require('../237-delete-node-in-a-linked-list');

describe('237-delete-node-in-a-linked-list', function() {
  it('works', function() {
    var head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);

    problem(head.next.next);

    expect(head.val).toEqual(1);
    expect(head.next.val).toEqual(2);
    expect(head.next.next.val).toEqual(4);
    expect(head.next.next.next).toBeNull();
  });
});
