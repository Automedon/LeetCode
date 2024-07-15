/*
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

 

Example 1:


Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
Example 2:

Input: n = 1
Output: [["Q"]]
 

Constraints:

1 <= n <= 9
*/


var solveNQueens = function (n) {
  const cols = new Set()// c;
  const neg = new Set()// r-c;
  const pos = new Set()// r+c;
  const res = [];
  const board = Array(n).fill([]).map(() => Array(n).fill('.'));

  const dfs = (r = 0) => {
    if (n === r) return res.push(board.slice().map(v => v.join``));

    for (let col = 0; col < n; col++) {
      if (cols.has(col) || neg.has(r - col) || pos.has(r + col)) {
        continue
      }
      cols.add(col);
      neg.add(r - col);
      pos.add(r + col);
      board[r][col] = 'Q'
      dfs(r + 1)
      board[r][col] = '.'
      cols.delete(col);
      neg.delete(r - col);
      pos.delete(r + col)
    }
  };


  dfs();
  return res;
};
