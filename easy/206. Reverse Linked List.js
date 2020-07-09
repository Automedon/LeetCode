/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
*/
const reverseList = (head, prev = null) => {
    if (!head) return prev;
    const next = head.next;
    head.next = prev;
    return reverseList(next, head);
};
