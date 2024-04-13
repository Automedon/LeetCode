/*
Given a string s, partition s such that every 
substring
 of the partition is a 
palindrome
. Return all possible palindrome partitioning of s.

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]

Constraints:

1 <= s.length <= 16
s contains only lowercase English letters.
*/
var partition = function (s) {
  const res = [];
  const part = [];
  const isPal = (str) => str === str.split``.reverse().join``
  const dfs = (i = 0) => {
  
    if (i === s.length) return res.push(part.slice());
    for(let j=i;j<=s.length;j++){
      if(isPal(s.slice(i,j+1))){
        part.push(s.slice(i,j+1));
        dfs(i+1);
        part.pop()
      }
    }
  }
  dfs()
  console.log(res)
  return res
};
