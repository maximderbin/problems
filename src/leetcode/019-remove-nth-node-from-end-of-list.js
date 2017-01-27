/*
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 * 19. Remove Nth Node From End of List
 *
 * Given a linked list, remove the nth node from the end of list and return its head.
 *
 * For example,
 *
 *   Given linked list: 1->2->3->4->5, and n = 2.
 *
 *   After removing the second node from the end, the linked list becomes 1->2->3->5.
 *
 * Note:
 * Given n will always be valid.
 * Try to do this in one pass.
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 *
 * var removeNthFromEnd = function(head, n) {
 *
 * };
 */

module.exports = function(head, n) {
  if (!head.next) { return null; }

  var cur = head;
  var array = [];
  var previous;

  while (cur) {
    array.push(cur);
    cur = cur.next;
  }

  previous = array[array.length - n - 1];

  if (previous) {
    previous.next = array[array.length - n + 1] || null;
  } else {
    cur = array[array.length - n];
    head = cur.next;
    cur.next = null;
  }

  return head;
};
