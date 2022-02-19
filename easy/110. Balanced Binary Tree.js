/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
*/

var isBalanced = function(root) {
    if (!root) return true
    const left = dfs(root.left)
    const right = dfs(root.right)
    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}

const dfs = root => {
    if (!root) return 0
    return Math.max(dfs(root.left), dfs(root.right)) + 1
}
