/*
Given a string s, return true if a permutation of the string could form a 
palindrome
 and false otherwise.

 

Example 1:

Input: s = "code"
Output: false
Example 2:

Input: s = "aab"
Output: true
Example 3:

Input: s = "carerac"
Output: true
 

Constraints:

1 <= s.length <= 5000
s consists of only lowercase English letters.
*/
var canPermutePalindrome = function(s) {
    const obj = s.split('').reduce((a,b)=>{
      if(!a[b]) a[b]=0;
      a[b]+=1
      return a
    },{})
    return Object.values(obj).filter(v=>v%2).length <=1
};
