/*
A robot on an infinite XY-plane starts at point (0, 0) and faces north. The robot can receive one of three possible types of commands:

-2: turn left 90 degrees,
-1: turn right 90 degrees, or
1 <= k <= 9: move forward k units.
Some of the grid squares are obstacles. The ith obstacle is at grid point obstacles[i] = (xi, yi).

If the robot would try to move onto them, the robot stays on the previous grid square instead (but still continues following the rest of the route.)

Return the maximum Euclidean distance that the robot will be from the origin squared (i.e. if the distance is 5, return 25).

Note:

North means +Y direction.
East means +X direction.
South means -Y direction.
West means -X direction.
 

Example 1:

Input: commands = [4,-1,3], obstacles = []
Output: 25
Explanation: The robot starts at (0, 0):
1. Move north 4 units to (0, 4).
2. Turn right.
3. Move east 3 units to (3, 4).
The furthest point away from the origin is (3, 4), which is 32 + 42 = 25 units away.
Example 2:

Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
Output: 65
Explanation: The robot starts at (0, 0):
1. Move north 4 units to (0, 4).
2. Turn right.
3. Move east 1 unit and get blocked by the obstacle at (2, 4), robot is at (1, 4).
4. Turn left.
5. Move north 4 units to (1, 8).
The furthest point away from the origin is (1, 8), which is 12 + 82 = 65 units away.
 

Constraints:

1 <= commands.length <= 104
commands[i] is one of the values in the list [-2,-1,1,2,3,4,5,6,7,8,9].
0 <= obstacles.length <= 104
-3 * 104 <= xi, yi <= 3 * 104
The answer is guaranteed to be less than 231
*/
var robotSim = function(commands, obstacles) {
     let obstacle = {};
    let x = 0;
    let y = 0;
    let max = 0;

    
    let direction = 0;
    for(let i = 0; i < obstacles.length; i++) {
        obstacle[obstacles[i]] = true;
    }
    
    for(let i = 0; i < commands.length; i++) {
        
        if(commands[i] == -1) {
            direction = (direction + 1)% 4;  
        } else if(commands[i] == -2) {
            direction  = ((direction - 1) + 4) % 4;
        } else {
            while(commands[i]--) {
                let previousX = x;
                let previousY = y;
                
                if(direction===0) y++;
                if(direction===1) x++;
                if(direction===2) y--;
                if(direction===3) x--;
                if(obstacle[x+','+y]) {
                    [x, y] = [previousX,previousY];
                    break;
                }
            }
        }
        max = Math.max(max, x**2 + y**2)
    }
    return max;
};
