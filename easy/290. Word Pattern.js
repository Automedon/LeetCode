/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", s = "dog dog dog dog"
Output: false
 

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lower-case English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
*/
var wordPattern = function(p, s) {
    s=s.split` `
    if(p.length!==s.length) return false
    const map = new Map()
    const map2 = new Map()
    for (let i=0;i<p.length;i++){
        if(!map.has(p[i],s[i])){
            map.set(p[i],s[i])
        } 
        if(!map2.has(s[i],p[i])){
            map2.set(s[i],p[i])
        }
        if (map.get(p[i])!==s[i]||map2.get(s[i])!==p[i]){
            return false
        }
    }
    return true
};
