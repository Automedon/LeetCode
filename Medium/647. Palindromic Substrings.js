/*
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.
*/
var countSubstrings = function (s) {
  let res = 0;

  const isPal = (l, r, str) => {
    while (l >= 0 && r < str.length && str[l] === str[r]) {
      l--;
      r++;
      res++
    }
  }
  
  for (let i = 0; i <s.length; i++) {
    isPal(i, i, s);
    isPal(i, i + 1, s)
  }
  return res
};
