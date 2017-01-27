var ListNode = require('../utils/ListNode');
var problem = require('../002-add-two-numbers');

describe('002-add-two-numbers', function() {
  it('when the lists are the same length', function() {
    var p = new ListNode(2);
    p.next = new ListNode(4);
    p.next.next = new ListNode(3);

    var q = new ListNode(5);
    q.next = new ListNode(6);
    q.next.next = new ListNode(4);

    var result = problem(p, q);

    expect(result.val).toEqual(7);
    expect(result.next.val).toEqual(0);
    expect(result.next.next.val).toEqual(8);
  });

  it('when lists are different length', function() {
    var p = new ListNode(0);
    p.next = new ListNode(1);

    var q = new ListNode(0);
    q.next = new ListNode(1);
    q.next.next = new ListNode(2);

    var result = problem(p, q);

    expect(result.val).toEqual(0);
    expect(result.next.val).toEqual(2);
    expect(result.next.next.val).toEqual(2);
  });

  it('when one list is empty', function() {
    var p = new ListNode;

    var q = new ListNode(0);
    q.next = new ListNode(1);

    var result = problem(p, q);

    expect(result.val).toEqual(0);
    expect(result.next.val).toEqual(1);
  });

  it('when sum results in extra carry', function() {
    var p = new ListNode(9);
    p.next = new ListNode(9);

    var q = new ListNode(1);

    var result = problem(p, q);

    expect(result.val).toEqual(0);
    expect(result.next.val).toEqual(0);
    expect(result.next.next.val).toEqual(1);
  });
});
