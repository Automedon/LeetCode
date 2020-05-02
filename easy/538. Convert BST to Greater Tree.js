/*
Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
*/
var convertBST = function(root) {
    let sum = 0
    function trans(root) {
        if(root === null) return
        trans(root.right)
        root.val+=sum
        sum = root.val
        trans(root.left)
    }
    trans(root)
    return root
};
