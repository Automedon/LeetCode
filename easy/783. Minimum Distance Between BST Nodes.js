/*
Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of any two different nodes in the tree.

Example :

Input: root = [4,2,6,1,3,null,null]
Output: 1
Explanation:
Note that root is a TreeNode object, not an array.

The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

          4
        /   \
      2      6
     / \    
    1   3  

while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.
Note:

The size of the BST will be between 2 and 100.
The BST is always valid, each node's value is an integer, and each node's value is different.
This question is the same as 530: https://leetcode.com/problems/minimum-absolute-difference-in-bst/
*/
var minDiffInBST = function(root) {
    const arr =  [];
    function tr(root,arr){
        if (!root) return;
        root.left&&tr(root.left,arr)
                arr.push(root.val)
        root.right&&tr(root.right,arr)
    }
    tr(root,arr)
    return arr.reduce((min,b,i)=>{
        if (i===0) return min
        return Math.min(min,Math.abs(b-arr[i-1]))
    },Number.MAX_SAFE_INTEGER)
};
