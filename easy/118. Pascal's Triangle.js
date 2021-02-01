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
var generate = function(numRows) {
    let resp = [];
    let i = 0;
    while (i < numRows) {
        if (i === 0) {
            resp.push([1]);
        } else {
            let newRow = [];
            for (let j = 0; j <= resp[i-1].length; j++) {
                if (j-1 < 0 || j === resp[i-1].length) {
                    newRow.push(1);
                } else {
                    newRow.push(resp[i-1][j-1] + resp[i-1][j]);
                }
            }
            resp.push(newRow);
        }
        i++;
    }
    return resp;
};
