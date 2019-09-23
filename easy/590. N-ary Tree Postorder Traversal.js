/*
Given an n-ary tree, return the postorder traversal of its nodes' values.

For example, given a 3-ary tree:

 



 

Return its postorder traversal as: [5,6,3,2,4,1].

 
Note:

Recursive solution is trivial, could you do it iteratively?
*/
var postorder = function(root) {
    let arr = [];
    function search(tree){
        if (!tree) return
        tree.children.map(v=>search(v))
        arr.push(tree.val)
    }
    search(root)
    return arr
};
