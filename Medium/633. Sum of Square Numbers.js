/*
Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

Example 1:

Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5
Example 2:

Input: c = 3
Output: false
 

Constraints:

0 <= c <= 231 - 1
*/
var judgeSquareSum = function (c) {
    let l = 0;
    let r = ~~Math.sqrt(c);
    while (l <= r) {
        const a = l * l;
        const b = r * r;
        if (a + b > c) r--
        else if (a + b < c) {
            l++
        } else return true
    }
    return false;
};
