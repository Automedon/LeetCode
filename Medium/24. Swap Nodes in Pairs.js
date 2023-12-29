/*
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

Example 1:


Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]
 

Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100
*/
var swapPairs = function(head) {
    const arr = [];
    let tempArr = []
    while(head){
        if(tempArr.length<2){
            tempArr.push(head.val)
        } else {
    
            arr.push(tempArr)
            tempArr = [];
            tempArr.push(head.val)
        }
        if(head.next == null){
            arr.push(tempArr)
        }
        head = head.next
    }
    const newArr = arr.map(v=>v.reverse()).flat()
    if(!newArr.length) return null;
    let newLL = new ListNode(newArr.pop());
    while(newArr.length){
        let node = new ListNode(newArr.pop())
        node.next = newLL;
        newLL =  node;
    }
    return newLL
};
