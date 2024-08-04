/*
Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]
Example 2:


Input: root = [3,9,8,4,0,1,7]
Output: [[4],[9],[3,0,1],[8],[7]]
Example 3:


Input: root = [3,9,8,4,0,1,7,null,null,null,2,5]
Output: [[4],[9,5],[3,0,1],[8,2],[7]]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

var verticalOrder = function (root) {
    if (!root) return [];
    const q = [];
    const map = new Map();
    q.push({ node: root, col: 0 });
    while (q.length) {
        const { node, col } = q.shift();
        if (map.has(col)) map.get(col).push(node.val)
        else map.set(col, [node.val])
        if (node.left) q.push({ node: node.left, col: col - 1 })
        if (node.right) q.push({ node: node.right, col: col + 1 })
    }
    const res = Array.from(map.entries());
    return res.sort((a,b)=>a[0]-b[0]).map(v=>v[1])
};
