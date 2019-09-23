/*
Given an n-ary tree, return the preorder traversal of its nodes' values.

For example, given a 3-ary tree:

 



 

Return its preorder traversal as: [1,3,5,6,2,4].

 

Note:

Recursive solution is trivial, could you do it iteratively?
*/
var preorder = function(root) {
    let arr = [];
    function search(tree){
        if (!tree) return;
        arr.push(tree.val)
        tree.children.map(v=>search(v))
    }
    search(root)
    return arr    
};
