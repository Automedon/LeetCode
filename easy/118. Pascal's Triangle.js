/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/
/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30
*/
var generate = function(numRows) {
    const arr = [[1],[1,1]];
    for(let i=2;i<numRows;i++){
        for(let j=1;j<i;j++){
            if(!arr[i]) arr[i]=[1];
            arr[i].push(arr[i-1][j-1]+arr[i-1][j])
        }
        arr[i].push(1)
    }
    
    return arr.slice(0,numRows)
};
