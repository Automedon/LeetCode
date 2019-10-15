/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/
var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(0)
    nodeSum(l1, l2, l3, 0)
    function nodeSum(n1, n2, n3, extraSum) {
        let currnnode = ((n1.val || 0) + (n2.val || 0) + extraSum) + ''
        let currentExtraSum = 0
        if (currnnode.length > 1) {
            currentExtraSum = currnnode[0] * 1
        }
        n3.val = currnnode[currnnode.length - 1] * 1
        if (n1.next || n2.next || currentExtraSum) {
            n3.next = new ListNode(0)
            nodeSum(n1.next || {}, n2.next || {}, n3.next, currentExtraSum)
        }
    }
    return l3
};
