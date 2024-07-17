/*
Given an integer array nums, return the length of the longest strictly increasing 
subsequence
.

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
 

Constraints:

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
 

Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?
*/
const bs = (arr, target) => {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    const mid = l + Math.floor((r - l) / 2)
    if (arr[mid] === target) {
      return mid
    }
    if (arr[mid] > target) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return l
}
var lengthOfLIS = function (nums) {
  const seq = [nums[0]];
  for (let num of nums) {
    if (num > seq.at(-1)) seq.push(num);
    else {
      seq[bs(seq,num)] = num;
    }
  }
  return seq.length;
};
