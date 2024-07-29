/*
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

 

Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: 1
 

Constraints:

1 <= intervals.length <= 104
0 <= starti < endi <= 106
*/
var minMeetingRooms = function (intervals) {

    let room = 0;
    const starts = intervals.map(v => v[0]).sort((a, b) => a - b);
    const ends = intervals.map(v => v[1]).sort((a, b) => a - b);
    let end = 0;
    for (let i = 0; i < starts.length; i++) {
        if (starts[i] >= ends[end]) {
            room--;
            end++
        }
        room++

    }
    return room
};
