/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/
var addTwoNumbers = function(l1, l2) {
    let arr1 = ''
    let arr2 = ''
    while(l1){
        arr1+=l1.val
        l1=l1.next
    }
    while(l2){
        arr2+=l2.val
        l2=l2.next
    }
    let arr3 = (arr1*1+arr2*1).toString().split``.map(v=>v*1)
    let push=(node,data)=>{
        let newNode = new ListNode(data)
        newNode.next=node
        return newNode
    }
    let list = null
    arr3.map(v=>list=push(list,v))
    return list
};
