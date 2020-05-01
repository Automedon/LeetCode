/*
Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:

Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True
 

Example 2:

Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False
*/
var findTarget = function(root, k) {
    const arr = []
    function search(root){
        if (root===null) return null;
        arr.push(root.val)
        if (!root.left&&!root.right){
            return null
        }
        search(root.left)
        search(root.right)
    }
    search(root)
    for (let i=0;i<arr.length;i++){
        for (let j=i+1;j<arr.length;j++){
            if (arr[i]+arr[j]===k) return true
        }
    }
    return false
};
