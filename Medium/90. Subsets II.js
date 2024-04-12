/*
Given an integer array nums that may contain duplicates, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
*/
var subsetsWithDup = function (nums) {
  const res = [];
  nums.sort();
  const dfs = (i = 0, curr = []) => {
    if (i === nums.length) return res.push(curr.slice());
    curr.push(nums[i]);
    dfs(i + 1, curr);
    while (nums[i] === nums[i + 1]) {
      i++;
    }
    curr.pop();
    dfs(i + 1, curr)
  }
  dfs()
  return res;
};
