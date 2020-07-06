/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order.
*/
var intersection = function(nums1, nums2) {
    const arr = []
    for (let i=0;i<nums1.length;i++){
        const n = nums1[i]
        if (nums2.includes(n)){
            arr.push(n)
            nums2.splice(nums2.indexOf(n),1)
        }
    }
    return [...new Set(arr)]
};
