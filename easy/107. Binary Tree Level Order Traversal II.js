/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
*/
var levelOrderBottom = function(root) {
    const obj = {}
    function traverseBottomToTopLeftToRight(root,depth){
        if (!root) return;
        if (!obj[depth]) obj[depth]=[]
        obj[depth].push(root.val)
        traverseBottomToTopLeftToRight(root.left,depth+1)
        traverseBottomToTopLeftToRight(root.right,depth+1)
    }
    traverseBottomToTopLeftToRight(root,0)
    return Object.values(obj).reverse()
};
