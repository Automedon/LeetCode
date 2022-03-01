/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
 

Constraints:

0 <= rowIndex <= 33
 

Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?
*/

var getRow = function(rowIndex) {
    if(!rowIndex) return [1];
    
    let res = [1, 1]
    
    while(--rowIndex) {
        const next = [];
        
        for(let i = 0; i < res.length-1; i++) {
            next.push(res[i] + res[i+1]);
        }
        res = [1, ...next, 1];
    }
    return res;
};
