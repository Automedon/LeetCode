/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 

Follow up: Solve it both recursively and iteratively.
*/
var isSymmetric = function(root) {
    function dfs(rootL,rootR){
        if(!rootL&&!rootR) return true
        if(!rootL||!rootR) return false
        return rootL.val===rootR.val&&dfs(rootL.left,rootR.right)&&dfs(rootL.right,rootR.left)
    }
    return dfs(root,root)
};
