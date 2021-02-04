/*
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

Example 1:

Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:

Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 

Constraints:

nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.
*/
var findShortestSubArray = function(nums) {
    if (!nums.length) return 0
    let map = { [nums[0]] : [0, 0, 1] }
    let ans = map[nums[0]]
    for (let i = 1; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = [i, i, 1]
        } else {
            map[nums[i]][1] = i
            map[nums[i]][2]++
        }
        if (map[nums[i]][2] > ans[2]) {
            ans = map[nums[i]]
        } else if (map[nums[i]][2] === ans[2]) {
            let curr = map[nums[i]][1] - map[nums[i]][0] + 1
            let prev = ans[1] - ans[0] + 1
            if (curr < prev) ans = map[nums[i]]
        }
    }
    return ans[1] - ans[0] + 1
};

