// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head == null) {
    return null
  }
  return reverse(head)
}
function reverse(node) {
  let newhead
  let n = null
  while (node != null) {
    newhead = new ListNode(node.val)
    newhead.next = n
    n = newhead
    node = node.next
  }
  return newhead
}
