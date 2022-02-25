/*
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnNumber = 1
Output: "A"
Example 2:

Input: columnNumber = 28
Output: "AB"
Example 3:

Input: columnNumber = 701
Output: "ZY"
*/

var convertToTitle = function(n) {
     const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     let m, result = [];
     while (n > 0) {
        m = (n-1) % 26;
        n = (n-1-m) / 26;
		result.unshift(alphabets[m]);
    }
    return result.join("");
};
