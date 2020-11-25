/*
Given two strings a and b, find the length of the longest uncommon subsequence between them.

A subsequence of a string s is a string that can be obtained after deleting any number of characters from s. For example, "abc" is a subsequence of "aebdc" because you can delete the underlined characters in "aebdc" to get "abc". Other subsequences of "aebdc" include "aebdc", "aeb", and "" (empty string).

An uncommon subsequence between two strings is a string that is a subsequence of one but not the other.

Return the length of the longest uncommon subsequence between a and b. If the longest uncommon subsequence doesn't exist, return -1.

 

Example 1:

Input: a = "aba", b = "cdc"
Output: 3
Explanation: One longest uncommon subsequence is "aba" because "aba" is a subsequence of "aba" but not "cdc".
Note that "cdc" is also a longest uncommon subsequence.
Example 2:

Input: a = "aaa", b = "bbb"
Output: 3
Explanation: The longest uncommon subsequences are "aaa" and "bbb".
Example 3:

Input: a = "aaa", b = "aaa"
Output: -1
Explanation: Every subsequence of string a is also a subsequence of string b. Similarly, every subsequence of string b is also a subsequence of string a.
 

Constraints:

1 <= a.length, b.length <= 100
a and b consist of lower-case English letters.
*/
var findLUSlength = function(a, b) {
    return a === b ? -1 : Math.max(a.length, b.length);
};
