/*
Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/

const rotateAgainst90 = (arr)=>{
  if(!arr.length) return []
  const cols = arr.length;
  const rows = arr[0].length;
  const res = Array(arr[0].length).fill(null).map(v=>[]);
  for(let row=0;row<rows;row++){
      for(let col=0;col<cols;col++){
        res[row].push(arr[col][row])
      }
  }
  return res.reverse()
}

var spiralOrder = function(m) {
    const res = [];
    for(let row=0;row<m.length;){
        for(let col=0;col<m[0].length;col++){
            res.push(m[row][col]);
        }
        m = rotateAgainst90(m.slice(1))
    }
    return res
};

