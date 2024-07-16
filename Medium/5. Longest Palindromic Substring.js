/*
Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/
var longestPalindrome = function (s) {
  let pal = '';

  const findPal = (i, j, str) => {
    while (i >= 0 && j < str.length && str[i] === str[j]) {
      i--
      j++
    }
    return str.slice(i + 1, j)
  }
  for (let i = 0; i < s.length; i++) {
    const c1 = findPal(i, i, s);
    const c2 = findPal(i, i + 1, s);
    if (c1.length > pal.length) pal = c1;
    if (c2.length > pal.length) pal = c2
  }
  return pal
};
