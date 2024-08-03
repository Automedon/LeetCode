/*
Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

 

Example 1:


Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].
Example 2:


Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
Example 3:

Input: matrix = [[1]]
Output: 1
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 200
0 <= matrix[i][j] <= 231 - 1
*/
var longestIncreasingPath = function (matrix) {
    if (!matrix.length) return 0;
    const rows = matrix.length;
    const cols = matrix[0].length
    const arr = Array(rows).fill(null).map(() => Array(cols).fill(0));
    let ans = 0;

    const dfs = (row, col) => {
        if(arr[row][col]!==0) return arr[row][col]
        for (let dir of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            const newR = row + dir[0];
            const newC = col + dir[1];
            if (matrix[newR] !== undefined && matrix[newR][newC] !== undefined && matrix[row][col] < matrix[newR][newC]) {


                arr[row][col] = Math.max(arr[row][col], dfs(newR, newC))
            }
        }
        return ++arr[row][col]
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            ans = Math.max(ans, dfs(row, col))
        }
    }

    return ans
};
