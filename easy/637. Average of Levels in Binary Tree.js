/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
*/
var averageOfLevels = function(root) {
    const obj = {}
    function traverse(root,d=0){
        if (!root) return;
        if (!obj[d]) obj[d]=[]
        obj[d].push(root.val)
        d+=1
        traverse(root.left,d)
        traverse(root.right,d)
    }
    traverse(root)
    return Object.values(obj).map(v=>v.reduce((a,b)=>a+b,0)/v.length)
};
