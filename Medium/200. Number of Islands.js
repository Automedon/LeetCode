/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/
var numIslands = function (grid) {
  const rowL = grid.length;
  const colL = grid[0].length;
  let islands = 0;
  const dfs = (r, c) => {
    grid[r][c] = '0';
    if (c + 1 < colL && grid[r][c + 1] === '1') {
      dfs(r, c + 1)
    }
    if (c - 1 >= 0 && grid[r][c - 1] === '1') {
      dfs(r, c - 1)
    }
    if (r + 1 < rowL && grid[r + 1][c] === '1') {
      dfs(r + 1, c)
    }
    if (r - 1 >= 0 && grid[r - 1][c] === '1') {
      dfs(r - 1, c)
    }
  }

  for (let row = 0; row < rowL; row++) {
    for (let col = 0; col < colL; col++) {
      if (grid[row][col] === '1') {
        islands++;
        dfs(row, col);
      }
    }
  }


  return islands;
};
