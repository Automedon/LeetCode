/*
Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. Return the output in any order.

Example 1:

Input: s = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]
Example 2:

Input: s = "3z4"
Output: ["3z4","3Z4"]
 

Constraints:

1 <= s.length <= 12
s consists of lowercase English letters, uppercase English letters, and digits.
*/
var letterCasePermutation = function (s) {
  const res = [];
  const dfs = (i = 0, str = '') => {

    if (i === s.length) return res.push(str);
    if (/[0-9]/.test(s[i])) {
      return dfs(i + 1, str+s[i]);
    }
    dfs(i + 1, str+s[i].toLocaleLowerCase());
    dfs(i + 1, str+s[i].toLocaleUpperCase())
  }
  dfs()

  return res;
};
