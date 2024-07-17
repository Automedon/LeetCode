/*

Code
416. Partition Equal Subset Sum
Solved
Medium
Topics
Companies
Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

 

Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
 

Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100
*/
var canPartition = function (nums) {
  if (nums.length === 0) return 0;
  let totalSum = 0;
  for (const num of nums) {
    totalSum += num
  }
  if (totalSum % 2 !== 0) return false;
  const subSetSum = totalSum / 2;

  const dp = Array(subSetSum + 1).fill(false);
  dp[0] = 1;
  for (let num of nums) {
    for (let i = subSetSum; i >= num; i--) {

      dp[i] |= dp[i - num]
      if(dp[subSetSum]) return true
    }
  }

  return dp[subSetSum]
};
