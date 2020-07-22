/*
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

 

Example 1:

Input: "ab-cd"
Output: "dc-ba"
Example 2:

Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 

Note:

S.length <= 100
33 <= S[i].ASCIIcode <= 122 
S doesn't contain \ or "
*/
var reverseOnlyLetters = function(s) {
    const l = s.split``.filter(v=>/[a-zA-Z]/.test(v))
    const arr = []
    for (let i=0;i<s.length;i++){
        if (/[a-zA-Z]/.test(s[i])){
            arr.push(l.pop())
        } else {
            arr.push(s[i])
        }
    }
    return arr.join``
};
