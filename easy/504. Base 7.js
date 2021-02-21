/*
Given an integer, return its base 7 string representation.

Example 1:
Input: 100
Output: "202"
Example 2:
Input: -7
Output: "-10"
Note: The input will be in range of [-1e7, 1e7].
*/
var convertToBase7 = function(num) {
    if(num == 0) return '0';
    let res = "";
    let negative = false;
    if(num < 0){
        negative = true;
        num = num * -1;
    }
    while(num > 0){
        res = "" + num %7 + res;
        num = Math.floor(num/7);
    }
    
    if(negative){
        return '-'+res;
    }
    else{
        return res;    
    }
    
};
