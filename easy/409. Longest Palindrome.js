/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

var longestPalindrome = function(s, o) {
    return s.length - (o = Object.values(s.split('').reduce((c, a) => (c[a] = (c[a] || 0) + 1, c), {})).filter(a => a % 2).length) + !!o;
};
