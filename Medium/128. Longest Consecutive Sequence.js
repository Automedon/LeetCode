/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/
var longestConsecutive = function(nums) {
    if(nums.length==0) return 0
    nums = [...new Set(nums.sort((a,b)=>a-b))];
    const sequences = []
    let seq = [];
    for(let i=0;i<nums.length;i++){
      const num = nums[i];
      const nextNum = nums[i+1]
      seq.push(num);
      if(nextNum!==num+1){
        sequences.push(seq);
        seq = []
      }
      
    }
    return Math.max(...sequences.map(v=>v.length))
};
