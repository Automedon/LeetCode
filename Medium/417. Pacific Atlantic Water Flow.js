/*
There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

 

Example 1:


Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
[0,4]: [0,4] -> Pacific Ocean 
       [0,4] -> Atlantic Ocean
[1,3]: [1,3] -> [0,3] -> Pacific Ocean 
       [1,3] -> [1,4] -> Atlantic Ocean
[1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean 
       [1,4] -> Atlantic Ocean
[2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean 
       [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
[3,0]: [3,0] -> Pacific Ocean 
       [3,0] -> [4,0] -> Atlantic Ocean
[3,1]: [3,1] -> [3,0] -> Pacific Ocean 
       [3,1] -> [4,1] -> Atlantic Ocean
[4,0]: [4,0] -> Pacific Ocean 
       [4,0] -> Atlantic Ocean
Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.
Example 2:

Input: heights = [[1]]
Output: [[0,0]]
Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.
 

Constraints:

m == heights.length
n == heights[r].length
1 <= m, n <= 200
0 <= heights[r][c] <= 105
*/
var pacificAtlantic = function (heights) {
  const res = [];
  const rowL = heights.length;
  const colL = heights[0].length;
  const pac = new Map();
  const atl = new Map();
  const op = ([row, col]) => [
    [row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1]
  ];
  const isStop = ([row, col]) => row < 0 || col < 0 || row == rowL || col == colL;
  const dfs = ([row, col], visited, prevHeight) => {
    if (isStop([row, col]) || heights[row][col] < prevHeight || visited.has([row, col].join`*`)) return;
    visited.set([row, col].join`*`)
    for (const [r, c] of op([row, col])) {
      dfs([r, c], visited, heights[row][col])
    }
  }
  for (let c = 0; c < colL; c++) {
    dfs([0, c], pac, heights[0][c])
    dfs([rowL - 1, c], atl, heights[rowL - 1][c])
  }
  for (let r = 0; r < rowL; r++) {
    dfs([r, 0], pac, heights[r][0])
    dfs([r, colL - 1], atl, heights[r][colL - 1])
  }
  for (let [key] of atl) {
    if (pac.has(key)) res.push(key.split`*`)
  }
  return res
};
