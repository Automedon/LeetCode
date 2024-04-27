/*
Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example 1:

Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation: Notice that an 'O' should not be flipped if:
- It is on the border, or
- It is adjacent to an 'O' that should not be flipped.
The bottom 'O' is on the border, so it is not flipped.
The other three 'O' form a surrounded region, so they are flipped.
Example 2:

Input: board = [["X"]]
Output: [["X"]]
 
Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 200
board[i][j] is 'X' or 'O'.
*/
var solve = function (board) {
  const rowL = board.length;
  const colL = board[0].length;
  const op = ([row, col]) => [
    [row, col + 1],
    [row, col - 1],
    [row + 1, col],
    [row - 1, col]
  ]
  const isStop = ([row, col]) => row < 0 || col < 0 || row == rowL || col === colL || board[row][col] === 'X' || board[row][col] === 'T';
  const dfs = ([row, col]) => {
    if (isStop([row, col])) return;
    board[row][col] = 'T'
    for (const [r, c] of op([row, col])) {
      dfs([r, c])
    }
  }
  for (let r = 0; r < rowL; r++) {
    dfs([r, 0])
    dfs([r, colL - 1])
  }
  for (let c = 0; c < colL; c++) {
    dfs([0, c]);
    dfs([rowL - 1, c])
  }
  for(let r=0;r<rowL;r++){
    for(let c=0;c<colL;c++){
      if(board[r][c]==='O') board[r][c]='X'
      if(board[r][c]==='T') board[r][c]='O'
    }
  }
  return board
};
