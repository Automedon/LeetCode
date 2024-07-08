/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(0);
  let cur = dummy;
  let curry = 0;
  while (l1 || l2 || curry) {
    const val1 = l1?.val ?? 0;
    const val2 = l2?.val ?? 0;
    const sum = curry + val1 + val2;
    curry = sum > 9 ? 1 : 0;
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummy.next;
};
