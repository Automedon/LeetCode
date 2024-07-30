/*
Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

The following rules define a valid string:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "(*)"
Output: true
Example 3:

Input: s = "(*))"
Output: true
 

Constraints:

1 <= s.length <= 100
s[i] is '(', ')' or '*'.
*/

var checkValidString = function (s) {
    let open = 0;
    let closed = 0;

    for (let i in s) {
        if (s[i] === '(' || s[i] === '*') {
            open++
        } else {
            open--
        }

        if (s.at(-1 - i) === ')' || s.at(-1 - i) === '*') {
            closed++
        } else {
            closed--
        }
        if (open < 0 || closed < 0) return false
    }
    return true
};
