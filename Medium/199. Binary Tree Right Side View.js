/*
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example 1:

Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
Example 2:

Input: root = [1,null,3]
Output: [1,3]
Example 3:

Input: root = []
Output: []
 
Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/
var rightSideView = function (root) {
  const res = [];
  const dfs = (r, l = 0) => {
    if (!r) return
    if (!res[l]) res[l] = [];
    res[l].push(r.val)
    dfs(r.left, l + 1);
    dfs(r.right, l + 1);
  }
  dfs(root, 0);
  return res.map(v=>v.at(-1))
};
