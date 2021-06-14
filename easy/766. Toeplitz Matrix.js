/*
Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

 

Example 1:


Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: true
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.
Example 2:


Input: matrix = [[1,2],[2,2]]
Output: false
Explanation:
The diagonal "[1, 2]" has different elements.
*/
var isToeplitzMatrix = function(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length-1; j++) {
        if (matrix[i + 1][j + 1] !== matrix[i][j]) return false;
    }
  }
  return true;
};
