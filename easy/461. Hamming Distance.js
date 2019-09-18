/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/
var hammingDistance = function(x, y) {
  a=x.toString(2)
  b=y.toString(2)
  let max = Math.max(a.length,b.length)
  if (a.length>b.length){
      b=b.padStart(max,0)
  } else {
      a=a.padStart(max,0)
  }
  let count=0;
  for(let i=0;i<b.length;i++){
  if(a.split('')[i]!=b.split('')[i]) count++
  }
  return count
};
