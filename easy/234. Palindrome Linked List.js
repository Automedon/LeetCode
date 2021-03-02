/*
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
*/
const isPalindrome = (head) => {
  let node = head, arr = []
  while (node) arr.push(node.val), node = node.next
  return arr.join('') === arr.reverse().join('')
};
