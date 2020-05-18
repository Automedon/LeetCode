/*
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/
var fizzBuzz = function(n,arr=[]) {
    if (n%3===0&&n%5===0) arr.push("FizzBuzz")
    else if (n%3===0) arr.push("Fizz")
    else if (n%5===0) arr.push("Buzz")
    else arr.push(n.toString())
    return n>1?fizzBuzz(n-=1,arr):arr.reverse()
};
