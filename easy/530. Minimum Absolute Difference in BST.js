/*
Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
 

Note:

There are at least two nodes in this BST.
This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/
*/
var getMinimumDifference = function(root) {
    const arr = []
    function tr(root){
        if (root.left) tr(root.left)
        arr.push(root.val)
        if (root.right) tr(root.right)
    }
    tr(root) 
    return arr.reduce((min, val, i) => {
        if (i === 0) return min;
        return Math.min(min, Math.abs(val - arr[i-1]));
    }, Number.MAX_SAFE_INTEGER);
};
