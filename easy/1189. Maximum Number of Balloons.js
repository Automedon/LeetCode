/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

Example 1:



Input: text = "nlaebolko"
Output: 1
Example 2:



Input: text = "loonbalxballpoon"
Output: 2
Example 3:

Input: text = "leetcode"
Output: 0
 

Constraints:

1 <= text.length <= 10^4
text consists of lower case English letters only.
*/
var maxNumberOfBalloons = function(text) {
    const obj = text.split``.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{})
    let balloons = 0
    while (true){
        if (
            obj['b']>=1&&
            obj['a']>=1&&
            obj['l']>=2&&
            obj['o']>=2&&
            obj['n']>=1
        ){
            obj['b']-=1
            obj['a']-=1
            obj['l']-=2
            obj['o']-=2
            obj['n']-=1
            balloons+=1
        } else {
            return balloons
        }
    }
};
