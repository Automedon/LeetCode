/*
Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

All the visited cells of the path are 0.
All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
The length of a clear path is the number of visited cells of this path.


Example 1:

Input: grid = [[0,1],[1,0]]
Output: 2
Example 2:

Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
Output: 4
Example 3:

Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
Output: -1
 

Constraints:

n == grid.length
n == grid[i].length
1 <= n <= 100
grid[i][j] is 0 or 1
*/
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] === 1) return -1
  const rowL = grid.length;
  const colL = grid[0].length;
  if (rowL === 1 && colL === 1) return 1
  const op = ([row, col]) => [
    [row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1],
    [row + 1, col + 1],
    [row - 1, col - 1],
    [row + 1, col - 1],
    [row - 1, col + 1],
  ]
  let calls = 0;
  let passed = false;
  const isStop = ([row, col]) => row < 0 || col < 0 || row >= rowL || col >= colL || grid[row][col] === 1
  let q = [[0, 0]];

  while (q.length) {
      calls++
    if (passed) {
      return calls;
    }

    const newQ = []
    for (const [row, col] of q) {
      for (const [r, c] of op([row, col])) {
        if (isStop([r, c])) continue;
        newQ.push([r, c]);
        grid[r][c] = 1
        if (r == rowL - 1 && c === colL - 1) passed = true;
      }
    }
    q = newQ;
  }
  return -1

};
