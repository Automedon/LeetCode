/*
Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.



For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

 

Constraints:

Both of the given trees will have between 1 and 200 nodes.
Both of the given trees will have values between 0 and 200
*/
var leafSimilar = function(root1, root2) {
  const t1 = [];
  const t2 = [];
  function search(tree, arr) {
    if (tree === null) return;
    if (!tree.left && !tree.right) {
      arr.push(tree.val);
    }
    search(tree.left, arr);
    search(tree.right, arr);
  }
  search(root1, t1);
  search(root2, t2);
  return JSON.stringify(t1)===JSON.stringify(t2)
};
