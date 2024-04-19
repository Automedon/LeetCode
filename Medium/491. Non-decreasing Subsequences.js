/*
Given an integer array nums, return all the different possible non-decreasing subsequences of the given array with at least two elements. You may return the answer in any order.

Example 1:

Input: nums = [4,6,7,7]
Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
Example 2:

Input: nums = [4,4,3,2,1]
Output: [[4,4]]
 
Constraints:

1 <= nums.length <= 15
-100 <= nums[i] <= 100
*/
var findSubsequences = function (nums) {
  const res = [];
  const hash = {}
  const dfs = (start = 0, cur = [-Infinity]) => {
    if (cur.length > 2 && !hash[cur.join`*`]) {
      res.push(cur.slice(1))
      hash[cur.join`*`] = 1
    }
    if (start === nums.length) return;
    for (let i = start; i < nums.length; i++) {
      if (nums[i] >= (cur.at(-1))) {
        cur.push(nums[i])
        dfs(i + 1, cur);
        cur.pop()
      }
    }
  }
  dfs()
  return res
};
