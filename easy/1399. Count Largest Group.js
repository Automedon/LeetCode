/*
Given an integer n. Each number from 1 to n is grouped according to the sum of its digits. 

Return how many groups have the largest size.

 

Example 1:

Input: n = 13
Output: 4
Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
[1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. There are 4 groups with largest size.
Example 2:

Input: n = 2
Output: 2
Explanation: There are 2 groups [1], [2] of size 1.
Example 3:

Input: n = 15
Output: 6
Example 4:

Input: n = 24
Output: 5
 

Constraints:

1 <= n <= 10^4
*/
var countLargestGroup = function(n) {
    let m = new Map(), max = 0;
    for (let i = 1; i <= n; i++) {
        let sum = getSum(i);
        m.set(sum, m.get(sum)+1 || 1);
        max = Math.max(max, m.get(sum));
    }
    return Array.from(m.values()).filter(num => num === max).length;
};

var getSum = function(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}
