/*
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

Example 1:


Input: head = [1,2,3,4]
Output: [1,4,2,3]
Example 2:


Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
 

Constraints:

The number of nodes in the list is in the range [1, 5 * 104].
1 <= Node.val <= 1000
*/

const reverseList = (head, prev = null) => {
  if (head === null) {
    return prev
  }
  const next = head.next;
  head.next = prev;
  return reverseList(next, head)
}

var reorderList = function (head) {
  if (!head) return;
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let rev = reverseList(slow)
  slow.next = null;
  while (head && rev) {
    const next1 = head.next;
    const next2 = rev.next;
    head.next = rev;
    rev.next = next1;
    head = next1;
    rev = next2;
  }
};
