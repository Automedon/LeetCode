/*
You have n  tiles, where each tile has one letter tiles[i] printed on it.

Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

Example 1:

Input: tiles = "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
Example 2:

Input: tiles = "AAABBC"
Output: 188
Example 3:

Input: tiles = "V"
Output: 1
 
Constraints:

1 <= tiles.length <= 7
tiles consists of uppercase English letters.
*/
var numTilePossibilities = function (tiles) {
  const hash = tiles.split``.reduce((a, b) => (a[b] ? a[b] += 1 : a[b] = 1, a), {})
  let sum = 0;
  const dfs = (h) => {
    for (let i in h) {
      if (hash[i] == 0) continue
      sum++
      h[i]--
      dfs(h)
      h[i]++
    }
    return sum
  }
  return dfs(hash);
};
