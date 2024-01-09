/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/
var trap = function(height) {
    if(height.length === 0) return 0
    let ans = 0;
    const size = height.length;
    const leftMax = [height[0]];
    const rightMax = [];
    for (let i=1;i<size;i++){
      leftMax[i] = Math.max(height[i],leftMax[i-1])
    }
    rightMax[size-1] = height[size-1];
    for(let i = size - 2;i>=0;i--){
      rightMax[i] = Math.max(height[i], rightMax[i+1])
    }
    for(let i =1;i<size-1;i++){
      ans += Math.min(leftMax[i],rightMax[i])-height[i]
    }
    return ans
};
