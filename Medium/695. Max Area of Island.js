/*
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

Example 1:

Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
 
Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1.
*/
var maxAreaOfIsland = function (grid) {
  let max = 0
  const rowL = grid.length;
  const colL = grid[0].length;
  let n = 0
  const dfs = (r, c) => {
    n += 1
    max = Math.max(max, n);
    grid[r][c] = 0
    if (c - 1 >= 0 && grid[r][c - 1] == 1) {
      dfs(r, c - 1)
    }
    if (r + 1 < rowL && grid[r + 1][c] == 1) {
      dfs(r + 1, c)
    }
    if (r - 1 >= 0 && grid[r - 1][c] == 1) {
      dfs(r - 1, c)
    }
    if (c + 1 < colL && grid[r][c + 1] == 1) {
      dfs(r, c + 1)
    }

  }
  for (let row = 0; row < rowL; row++) {
    for (let col = 0; col < colL; col++) {
      if (grid[row][col] == 1) {
        n = 0;
        dfs(row, col)
      }
    }
  }
  return max;
};
