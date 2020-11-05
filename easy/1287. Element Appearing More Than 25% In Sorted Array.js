/*
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.

Return that integer.

 

Example 1:

Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6
 

Constraints:

1 <= arr.length <= 10^4
0 <= arr[i] <= 10^5
*/
var findSpecialInteger = function(arr) {
    const obj = arr.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{})
    const max = Math.max(...Object.values(obj))
    for (let i in obj){
        if (obj[i]===max){
            return i
        }
    }
};
