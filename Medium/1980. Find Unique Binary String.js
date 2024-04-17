/*
Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them.

Example 1:

Input: nums = ["01","10"]
Output: "11"
Explanation: "11" does not appear in nums. "00" would also be correct.
Example 2:

Input: nums = ["00","01"]
Output: "11"
Explanation: "11" does not appear in nums. "10" would also be correct.
Example 3:

Input: nums = ["111","011","001"]
Output: "101"
Explanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.

Constraints:

n == nums.length
1 <= n <= 16
nums[i].length == n
nums[i] is either '0' or '1'.
All the strings of nums are unique.
*/

var findDifferentBinaryString = function (nums) {
  let str = ''
  let stopDFS = false
  const dfs = (i = 0, cur = []) => {
    if (stopDFS) return;
    if (i === nums[0].length) {
      if (!nums.includes(cur.slice().join``)) {
        stopDFS = true
        str = cur.slice().join``;
      }
      return
    }
    cur.push(0)
    dfs(i + 1, cur);
    cur.pop();
    cur.push(1);
    dfs(i + 1, cur)
    cur.pop();
  }
  dfs()
  return str
};
