/*
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list://leetcode.com/problems/remove-duplicates-from-sorted-list/
 *
 * 83. Remove Duplicates from Sorted List
 *
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 *
 * For example,
 *   Given 1->1->2, return 1->2.
 *   Given 1->1->2->3->3, return 1->2->3.
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param {ListNode} head
 * @return {ListNode}
 *
 * var deleteDuplicates = function(head) {
 *
 * };
 */

module.exports = function(head) {
  if (!head) { return head; }

  var previous = head;
  var next = head.next;

  while (next) {
    if (previous.val === next.val) {
      previous.next = next.next;
    } else {
      previous = next;
    }

    next = previous.next;
  }

  return head;
};
