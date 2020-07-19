/*
You have a list of points in the plane. Return the area of the largest triangle that can be formed by any 3 of the points.

Example:
Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
Output: 2
Explanation: 
The five points are show in the figure below. The red triangle is the largest.


Notes:

3 <= points.length <= 50.
No points will be duplicated.
 -50 <= points[i][j] <= 50.
Answers within 10^-6 of the true value will be accepted as correct.
*/
var largestTriangleArea = function(points) {
    const n = points.length;
    let maxArea = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (k = j + 1; k < n; k++) {
                const area = calcArea(points[i], points[j], points[k]);
                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
};


function calcArea(coordA, coordB, coordC){
    const [xCoordA, yCoordA] = coordA;
    const [xCoordB, yCoordB] = coordB;
    const [xCoordC, yCoordC] = coordC;
    
    const sideA = xCoordA * (yCoordB - yCoordC);
    const sideB = xCoordB * (yCoordC - yCoordA);
    const sideC = xCoordC * (yCoordA - yCoordB);
    
    return Math.abs((sideA + sideB + sideC) / 2);
}
