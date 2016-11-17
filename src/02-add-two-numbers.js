/**
 * https://leetcode.com/problems/add-two-numbers/
 *
 * You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let sum = 0
  let modulo = 0
  let current = new ListNode()
  const head = current

  while (l1 || l2 || modulo) {
    if (typeof current.val === 'number') {
      current.next = new ListNode()
      current = current.next
    }

    sum = (l1 && l1.val || 0) + (l2 && l2.val || 0) + modulo
    modulo = Math.floor(sum / 10)
    current.val = sum % 10

    l1 = l1 && l1.next
    l2 = l2 && l2.next
  }

  return head
}
