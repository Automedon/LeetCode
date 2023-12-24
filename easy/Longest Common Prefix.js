/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/
var longestCommonPrefix = function(str) {
    let prefix = str[0];
    for(let i=1;i<str.length;i++){
        if(!str[i].startsWith(prefix)) {
            prefix = prefix.slice(0,-1)
            i--
        }
    }
    return prefix
};
