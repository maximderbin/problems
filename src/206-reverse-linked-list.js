/*
 * https://leetcode.com/problems/reverse-linked-list/
 *
 * 206. Reverse Linked List
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
 * var reverseList = function(head) {
 *
 * };
 */

module.exports = function(head) {
  var newHead = null;

  while(head !== null) {
    var next = head.next;
    head.next = newHead;
    newHead = head;
    head = next;
  }

  return newHead;
}
