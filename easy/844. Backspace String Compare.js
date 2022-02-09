/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 

Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
*/


var backspaceCompare = function(s, t) {
     const str = st =>{
        const stack = [];
        for(const l of st){
            if (l === '#')  stack.length > 0 && stack.pop();
            else stack.push(l);
        }
        return stack.join('');
    }
    return str(s) === str(t);
};
