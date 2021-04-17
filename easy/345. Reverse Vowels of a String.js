/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/
var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelsIndices = [];
    const str = s.split('');

    str.filter((l, i) => {
        const isVowel = vowels.includes(l.toLowerCase());
        
        if (isVowel) vowelsIndices.push(i);
            
        return isVowel;
    }).forEach((vowel, i, arr) => str[vowelsIndices[i]] = arr[arr.length - i - 1]);
    
    return str.join('');
};
