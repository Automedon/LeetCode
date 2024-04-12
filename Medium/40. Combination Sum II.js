/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
 
Constraints:

1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30
*/
var combinationSum2 = function(candidates, target) {
    const res = [];
    candidates.sort()
    const dfs = (i=0,cur=[],total=0)=>{
      if(total===target) return res.push(cur.slice())
      if(target<total||i===candidates.length) return;
      cur.push(candidates[i]);
      dfs(i+1,cur,total+candidates[i])
      while(candidates[i]===candidates[i+1]){
        i++
      }
      cur.pop()
      dfs(i+1,cur,total)

    }
    dfs()
    return res;
};
