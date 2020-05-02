/*
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
*/
function diameterOfBinaryTree(root) {
    let max = 0
     
     function maxDepth(root) {
         if (root === null) return 0 // if our root(num) is null then there is no path. return 0/null
         let left = maxDepth(root.left) // Assign the left  of tree to LEFT; this will be easier to call it instead of writing "maxDepth(root.left)" each time
         let right = maxDepth(root.right) //Same above
     
         
         max = Math.max(max, left + right) //if the path doesn't go through the root we just get the max of them
         return Math.max(left, right) + 1 // the path goes through the root so we add 1(for the root)
     }
     //since we don't know if the path will go through the root or not we will have to get the max between(path that visits the root, or the path that doesn't go through the root.)
     maxDepth(root)
     return max
 };
