/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/
var topKFrequent = function(nums, k) {
    const hash = {};
    for(let i=0;i<nums.length;i++){
      const n = nums[i];
      if(!hash[n]){
        hash[n] = 0;
      }
      hash[n]+=1;
    }
    return Object.entries(hash).sort((a,b)=>b[1]-a[1]).map(v=>v[0]).slice(0,k)
};
