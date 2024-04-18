/*
You are given a string s representing a list of words. Each letter in the word has one or more options.

If there is one option, the letter is represented as is.
If there is more than one option, then curly braces delimit the options. For example, "{a,b,c}" represents options ["a", "b", "c"].
For example, if s = "a{b,c}", the first character is always 'a', but the second character can be 'b' or 'c'. The original list is ["ab", "ac"].

Return all words that can be formed in this manner, sorted in lexicographical order.

Example 1:

Input: s = "{a,b}c{d,e}f"
Output: ["acdf","acef","bcdf","bcef"]
Example 2:

Input: s = "abcd"
Output: ["abcd"]
 
Constraints:

1 <= s.length <= 50
s consists of curly brackets '{}', commas ',', and lowercase English letters.
s is guaranteed to be a valid input.
There are no nested curly brackets.
All characters inside a pair of consecutive opening and ending curly brackets are different.
*/
var expand = function (s) {
  const res = [];
  const options = [];
  let pusInOptions = false;
  let curOptions = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{') {
      pusInOptions = true
      continue
    }
    if (s[i] === '}') {
      pusInOptions = false
      options.push(curOptions)
      curOptions = []
      continue
    }
    if (s[i] === ',') {
      continue
    }
    if (pusInOptions) {
      curOptions.push(s[i])
    } else {
      options.push(s[i])
    }
  }
  const dfs = (j = 0, cur = '') => {
    if (j === options.length) return res.push(cur);
    if (Array.isArray(options[j])) {
      for (let i = 0; i < options[j].length; i++) {
        dfs(j + 1, cur + options[j][i])
      }
    } else {
      dfs(j + 1, cur + options[j])
    }
  }
  dfs();
  return res.sort((a,b)=>a.localeCompare(b))
};
