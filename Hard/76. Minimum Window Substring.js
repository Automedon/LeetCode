/*
Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?
*/
var minWindow = function (s, t) {
  if (s.length === 0 || t.length === 0) {
    return ""
  }
  const dictT = new Map();
  for (let i = 0; i < t.length; i++) {
    const count = dictT.get(t[i]) || 0;
    dictT.set(t[i], count + 1)
  }
  const dictS = new Map();
  const required = dictT.size;
  let formmed = 0;
  let l = 0;
  let r = 0;
  const arr = [-1, l, r]
  while (r < s.length) {
    const cur1 = s[r];
    const count1 = dictS.get(cur1) || 0;
    dictS.set(cur1, count1 + 1);
    if (dictS.get(cur1) === dictT.get(cur1)) {
      formmed++
    }
    while (formmed === required) {
      if (arr[0] == -1 || r - l + 1 < arr[0]) {
        arr[0] = r - l + 1;
        arr[1] = l;
        arr[2] = r
      }
      const cur2 = s[l]
      dictS.set(cur2, dictS.get(cur2) - 1)
      if (dictS.get(cur2) < dictT.get(cur2)) {
        formmed--
      }
      l++
    }
    r++
  }
  if (arr[0] === -1) return ""
  return s.slice(arr[1], arr[2] + 1)
}; 
