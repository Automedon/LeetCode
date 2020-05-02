/*
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
*/
var binaryTreePaths = function(root) {
    const arr = []
    function t(root,str="",arr){
        if (!root) return;
        str+= root.val+" "
        if (!root.left&&!root.right){
            arr.push(str.trim().replace(/\s/g,"->"))
        }
        t(root.left,str,arr)
        t(root.right,str,arr)
    }
    t(root,'',arr)
    return arr
};
