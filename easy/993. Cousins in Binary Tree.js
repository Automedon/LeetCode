/*
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.

 

Example 1:


Input: root = [1,2,3,4], x = 4, y = 3
Output: false
Example 2:


Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
Example 3:



Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false
 

Note:

The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100.
*/
var isCousins = function(root, x, y) {
    const obj = {}
    function tr(root,depth,parent){
        if (!root) return;
        if (root.val===x||root.val===y){
            obj[root.val] = []
            obj[root.val].push(depth,JSON.stringify(parent))
        }
        tr(root.left,depth+1,root)
        tr(root.right,depth+1,root)
    }
    tr(root,0)
    return obj[x][0]===obj[y][0]&&obj[x][1]!==obj[y][1]
};
