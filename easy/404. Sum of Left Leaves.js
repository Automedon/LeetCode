/*
Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
*/
var sumOfLeftLeaves = function(root) {
    let n = 0 
    function tr(root){
        if (!root) return;
        if (root.left){
            if (root.left&&!root.left.left&&!root.left.right)n+=root.left.val
            tr(root.left)
        }
        root.right&&tr(root.right)
    }
    tr(root)
    return n
};
