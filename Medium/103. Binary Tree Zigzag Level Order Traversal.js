/*
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100
*/
var zigzagLevelOrder = function(root) {
    const res = {};
    const dfs = (r,l)=>{
      if(!r) return;
      if(!res[l]){
        res[l] = []
      }
      if(l%2==0){
        res[l].push(r.val)
      } else {
        res[l].unshift(r.val)
      }
      dfs(r.left,l+1)
      dfs(r.right,l+1)
    }
    dfs(root,0)
    return Object.values(res)
};
