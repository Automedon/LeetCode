/*
Given an integer array nums, find the sum of the elements between indices left and right inclusive, where (left <= right).

Implement the NumArray class:

NumArray(int[] nums) initializes the object with the integer array nums.
int sumRange(int left, int right) returns the sum of the elements of the nums array in the range [left, right] inclusive (i.e., sum(nums[left], nums[left + 1], ... , nums[right])).
 

Example 1:

Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) 
numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
 

Constraints:

1 <= nums.length <= 104
-105 <= nums[i] <= 105
0 <= left <= right < nums.length
At most 104 calls will be made to sumRange.
*/
var NumArray = function(nums) {
    this.nums = nums;
    this.hm = {};
};

NumArray.prototype.sumRange = function(i, j) {
    if(this.hm[i[j]]) return this.hm[i[j]];
    let sum = 0;
    let counter = i;
    
    while(counter<=j){
        sum += this.nums[counter];
        counter++;
    }
    this.hm[i] = {j: sum};
    return sum;
};
