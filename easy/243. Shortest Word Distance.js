/*
Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

 

Example 1:

Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
Output: 3
Example 2:

Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
Output: 1
 

Constraints:

2 <= wordsDict.length <= 3 * 104
1 <= wordsDict[i].length <= 10
wordsDict[i] consists of lowercase English letters.
word1 and word2 are in wordsDict.
word1 != word2
*/
var shortestDistance = function(wordsDict, word1, word2) {
  let left = false;
  let right = false;
  let min = Infinity;
  for (let i=0;i<wordsDict.length;i++){
    if(wordsDict[i]===word1) left = i+1;
    if(wordsDict[i]===word2) right = i+1;
    if(left && right) min = Math.min(min,Math.abs(right-left))
  }
  return min;
};
