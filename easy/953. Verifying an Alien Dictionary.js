/*
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

 

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
*/
const isAlienSorted = function(words, order) {
  const dict = order.split('').reduce((acc, cur, idx) => ({...acc, [cur]: idx }), {});

  return words.every(isOrder(dict));
};

const isOrder = function(dict) {
  return function(el, idx, arr) {
    for(let i = 0; i < el.length; i++) {
      if (arr[idx + 1] && el.charAt(i) !== arr[idx + 1].charAt(i)) {
        return dict[el.charAt(i)] < dict[arr[idx + 1].charAt(i)]; 
      }
    }
    return true;
  }
}
