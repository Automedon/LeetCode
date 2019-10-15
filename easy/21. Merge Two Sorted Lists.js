/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/
var mergeTwoLists = function(l1, l2) {
    if (!l1 || !l2) return l2 || l1;
    if (l2.val <= l1.val) return { val: l2.val, next: mergeTwoLists({val: l1.val, next: l1.next}, l2.next) };
    return { val: l1.val, next: mergeTwoLists(l1.next, l2) };
};
