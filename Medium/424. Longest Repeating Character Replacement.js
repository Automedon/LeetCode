/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
*/
var characterReplacement = function (s, k) {
  let left = 0;
  let max = 0;
  const hash = {}
  let maxFreq = 0;
  for (let right = 0; right < s.length; right++) {
    hash[s[right]] ||= 0;
    hash[s[right]] += 1;
    maxFreq = Math.max(maxFreq, hash[s[right]]);
    const isValid = right + 1 - left - maxFreq <= k
    if (!isValid) {
      hash[s[left]] -= 1;
      left += 1
    }
    max = right + 1 - left
  }
  return max;
};
