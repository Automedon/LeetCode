/*

Code
22. Generate Parentheses
Medium
Topics
Companies
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8
*/
var generateParenthesis = function(n) {
    const res = [];
    const backtracking = (str,open,closed)=>{
      if(open === n && closed === n){
        return res.push(str);
      }
      if(open<n){
        backtracking(str+'(',open+1,closed)
      }
      if(closed<open){
        backtracking(str+')',open,closed+1)
      }
    }
    backtracking('',0,0);
    return res;
};
