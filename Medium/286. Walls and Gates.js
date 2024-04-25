/*
You are given an m x n grid rooms initialized with these three possible values.

-1 A wall or an obstacle.
0 A gate.
INF Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

Example 1:

Input: rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
Output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]
Example 2:

Input: rooms = [[-1]]
Output: [[-1]]
 

Constraints:

m == rooms.length
n == rooms[i].length
1 <= m, n <= 250
rooms[i][j] is -1, 0, or 231 - 1.
*/
var wallsAndGates = function (rooms) {
  const rowL = rooms.length;
  const colL = rooms[0].length;
  const op = ([row, col]) => [
    [row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1]
  ]                      
  const isOutOfBounds = (row, col) => {
    return row < 0 || col < 0 ||
      row >= rowL || col >= colL || rooms[row][col] === -1;
  }
  const dfs = ([row, col], d) => {
    if (isOutOfBounds(row, col)) return;
    if (d && rooms[row][col] <= d) return;
    rooms[row][col] = d
    for (const [r, c] of op([row, col])) dfs([r, c], d + 1);
  }
  for (let i = 0; i < rowL; i++) {
    for (let j = 0; j < colL; j++) {
      if (rooms[i][j] === 0) {
        dfs([i, j], 0)
      }
    }
  }
  return rooms
};
