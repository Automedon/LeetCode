/*
Given a string s, return the number of substrings that have only one distinct letter.

Example 1:

Input: s = "aaaba"
Output: 8
Explanation: The substrings with one distinct letter are "aaa", "aa", "a", "b".
"aaa" occurs 1 time.
"aa" occurs 2 times.
"a" occurs 4 times.
"b" occurs 1 time.
So the answer is 1 + 2 + 4 + 1 = 8.
Example 2:

Input: s = "aaaaaaaaaa"
Output: 55
 
Constraints:

1 <= s.length <= 1000
s[i] consists of only lowercase English letters.
*/
var countLetters = function(s) {
    let count = 0;
    for(let i=0;i<s.length;i++){
      count++;
      for(let j=i+1;j<s.length;j++){
        if(s[i]===s[j]){
          count++
        } else {
          break
        }
      }
    }
    return count;
};
