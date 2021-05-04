/*
Given an array of strings words representing an English Dictionary, return the longest word in words that can be built one character at a time by other words in words.

If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.

 

Example 1:

Input: words = ["w","wo","wor","worl","world"]
Output: "world"
Explanation: The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
Example 2:

Input: words = ["a","banana","app","appl","ap","apply","apple"]
Output: "apple"
Explanation: Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
 

Constraints:

1 <= words.length <= 1000
1 <= words[i].length <= 30
words[i] consists of lowercase English letters.
*/
var longestWord = function(words) {
    if (!words || words.length == 0) return "";
    let res = "";
    let set = new Set(); //store valid word
    words.sort(); //sort string 
    for (let word of words){
        let prev = word.substring(0, word.length -1);
        if (word.length == 1 || set.has(prev)){ 
            res = (word.length > res.length) ? word : res;
            set.add(word);
        }
    }
    return res;
};
