/*
Given an array A of positive lengths, return the largest perimeter of a triangle with non-zero area, formed from 3 of these lengths.

If it is impossible to form any triangle of non-zero area, return 0.
*/
var largestPerimeter = function(A) {
    let sorted = A.sort((a,b)=> b-a);
    let tri = sorted.splice(0,3)
    while (sorted.length > -1){
        if (tri[2] + tri[1] > tri[0]){
            return tri.reduce((a,b)=>a+b)
        } else {
            if (sorted.length === 0) break
            tri.shift();
            tri.push(sorted.shift());
        }
    }
    return 0
};
