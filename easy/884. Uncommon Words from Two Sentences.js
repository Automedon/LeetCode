/*
We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.

 

Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]
 

Note:

0 <= A.length <= 200
0 <= B.length <= 200
A and B both contain only spaces and lowercase letters.
*/
var uncommonFromSentences = function(A, B) {
    const arr = A.split` `.concat(B.split` `).reduce((a,b)=>(a[b]=a[b]?a[b]+=1:1,a),{})
    const answer = []
    for (let i in arr){
        if (arr[i]===1){
            answer.push(i)
        }
    }
    return answer
};
