/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 
Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 

Follow up: Could you use search pruning to make your solution faster with a larger board?
*/
var exist = function (board, word) {

  const rows = board.length;
  const cols = board[0].length;
  let paths = new Set();
  const wordLength = word.length;
  const checkLetters = board.map(v => v.join``).join``;
  if (wordLength > rows * cols) return false;
  if (!word.split``.every(v => checkLetters.includes(v))) return false
  const dfs = (r, c, i) => {
    if (i === wordLength) return true;
    if (r < 0 || c < 0) return 0;
    if (r === rows || cols === c) return false;
    if (paths.has(`${r}-${c}`)) return false;
    if (word[i] !== board[r][c]) return false;

    paths.add(`${r}-${c}`);
    res = dfs(r + 1, c, i + 1) || dfs(r - 1, c, i + 1) || dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1)
    paths.delete(`${r}-${c}`)
    return res
  }
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) return true;
    }
  }
  return false
};
