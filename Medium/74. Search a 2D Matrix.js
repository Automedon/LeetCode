/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
*/
var searchMatrix = function (matrix, target) {

  let rightRow = [];
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] <= target && target <= matrix[i][matrix[i].length - 1]) {
      rightRow = matrix[i];
      break
    }
  }
  let left = 0;
  let right = rightRow.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (rightRow[mid] >= target) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  if (rightRow[left] === target) return true;
  return false;
};
