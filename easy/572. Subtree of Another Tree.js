/*
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
*/
var isSubtree = function(s, t) {
    return JSON.stringify(s).indexOf(JSON.stringify(t))!==-1
};

const dfsT = (r1, r2) => {
  if (!r1 && !r2) return true;
  if (!r1 || !r2) return false;
  if (r1.val !== r2.val) return false;
  return dfsT(r1.left, r2.left) && dfsT(r1.right, r2.right)
}
var isSubtree = function (root, subRoot) {
  if (!root) return false;
  return dfsT(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};
