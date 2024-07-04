/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  const arrS1 = Array(26).fill(0)
  const arrS2 = Array(26).fill(0)
  for (let i = 0; i < s1.length; i++) {
    arrS1[s1[i].charCodeAt() - 'a'.charCodeAt()]++
    arrS2[s2[i].charCodeAt() - 'a'.charCodeAt()]++
  }
  const arrS1J = arrS1.join``
  
  for (let i = 0; i < s2.length - s1.length; i++) {
    if (arrS1J === arrS2.join``) return true;
    arrS2[s2[i + s1.length].charCodeAt() - 'a'.charCodeAt()]++;
    arrS2[s2[i].charCodeAt() - 'a'.charCodeAt()]--
  }
  return arrS1J === arrS2.join``
};
