/*
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".
*/

var findWords = function(words) {
    const regexp = /^[qwertyuiop]+$|^[asdfghjkl]+$|^[zxcvbnm]+$/i;
    return words.filter((word) => regexp.test(word));
};
