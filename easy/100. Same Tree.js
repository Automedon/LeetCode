/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
*/

var isSameTree = function(p, q) {
    return JSON.stringify(p)===JSON.stringify(q)
};

var isSameTree = function (p, q) {
  const dfs = (r1, r2) => {
    if (!r1 && !r2) return true;
    if (!r1 || !r2) return false;
    if (r1.val !== r2.val) return false;
    return dfs(r1.left, r2.left) && dfs(r1.right, r2.right)
  }

  return dfs(p, q)
};
