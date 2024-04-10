/*
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Example 1:

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
Example 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]

Constraints:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder and inorder consist of unique values.
Each value of inorder also appears in preorder.
preorder is guaranteed to be the preorder traversal of the tree.
inorder is guaranteed to be the inorder traversal of the tree.
*/
var buildTree = function (preorderA, inorder) {

  const hashIn = inorder.reduce((a, b, i) => (a[b] = i, a), {})
  let preorderIndex = 0;
  const arrayToTree = (preorder, left, right) => {
    if (left > right) return null;
    const rootVal = preorder[preorderIndex++]
    const root = new TreeNode(rootVal);
    root.left = arrayToTree(preorder, left, hashIn[rootVal] - 1)
    root.right = arrayToTree(preorder, hashIn[rootVal] + 1, right)
    return root;
  }

  return arrayToTree(preorderA, 0, preorderA.length - 1)
};
