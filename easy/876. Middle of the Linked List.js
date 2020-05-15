/*
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Note:

The number of nodes in the given list will be between 1 and 100.
*/
var middleNode = function(head) {
    const arr = []
    let copy = head
    while (copy){
        arr.push(copy.val)
        copy = copy.next
    }
    const mid = arr.length%2===0?Math.round(arr.length/2)+1:Math.round(arr.length/2)
    let i = 1
    while (head){
        if (i===mid) return head
        head = head.next
        i++
    }
};
