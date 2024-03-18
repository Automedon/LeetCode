/*
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 

Example 1:

Input: nums = [1,2,3]
Output: 6
Example 2:

Input: nums = [1,2,3,4]
Output: 24
Example 3:

Input: nums = [-1,-2,-3]
Output: -6
 

Constraints:

3 <= nums.length <= 104
-1000 <= nums[i] <= 1000
*/

var maximumProduct = function(nums) {
    nums.sort((a,b)=>a-b)
    const l = nums.length;
    return Math.max(nums[0]*nums[1]*nums[l-1],nums[l-1]*nums[l-2]*nums[l-3])
};
