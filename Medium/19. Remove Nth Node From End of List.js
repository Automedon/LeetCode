/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

Follow up: Could you do this in one pass?
*/

var removeNthFromEnd = function(head, n) {
    let pointer1 = head;
    for (let i=0;i<n;i++){
      pointer1 = pointer1.next;
    }
    if(!pointer1) return head.next;
    let pointer2 = head;
    while(pointer1.next){
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    }
    pointer2.next = pointer2.next.next;
    return head;
};
