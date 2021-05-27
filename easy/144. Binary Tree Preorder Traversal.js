/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,2,3]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [1,2]
Example 5:


Input: root = [1,null,2]
Output: [1,2]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Follow up: Recursive solution is trivial, could you do it iteratively?
*/
var preorderTraversal = function(root) {
    if(!root) return []
    let result = [];
    function helper(root){
        result.push(root.val);
        if(root.left) helper(root.left);
        if(root.right) helper(root.right);
    }
    helper(root);
    return result
};
