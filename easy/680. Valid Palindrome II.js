/*
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
*/
var validPalindrome = (s) => {
    let l = 0, r = s.length - 1;
    while (l < r)
        if (s[l++] != s[r--])
            return palin(s, l - 1, r) || palin(s, l, r + 1)
    return true;
};

var palin = (s, l, r) => {
    while (l < r)
        if (s[l++] != s[r--])
            return false;
    return true;
};
