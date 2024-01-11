/*
Given a string num which represents an integer, return true if num is a strobogrammatic number.

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

 

Example 1:

Input: num = "69"
Output: true
Example 2:

Input: num = "88"
Output: true
Example 3:

Input: num = "962"
Output: false
 

Constraints:

1 <= num.length <= 50
num consists of only digits.
num does not contain any leading zeros except for zero itself.
*/
var isStrobogrammatic = function(num) {
    let str = ''
    num = num.toString()
    for(let i = 0;i<num.length;i++){
      if(num[i]==='1'||num[i]==='0'||num[i]==='8') str = num[i] + str;
      if(num[i]==='6') str = '9' + str
      if(num[i]==='9') str = '6' + str
    }
    return num === str
};
