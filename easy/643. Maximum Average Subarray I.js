/*
Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:

Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
 

Note:

1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000].
 
*/
var findMaxAverage = function(nums, k) {
    let max = -Infinity;
    for (let i = 0, sum = 0; i < nums.length; i++) {
        sum += nums[i] - (nums[i - k] || 0);
        if (i >= k - 1) max = Math.max(max, sum);
    }
    return max / k;
};
