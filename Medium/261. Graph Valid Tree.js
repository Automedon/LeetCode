/*
You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

Return true if the edges of the given graph make up a valid tree, and false otherwise.

Example 1:

Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true
Example 2:

Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
Output: false
 

Constraints:

1 <= n <= 2000
0 <= edges.length <= 5000
edges[i].length == 2
0 <= ai, bi < n
ai != bi
There are no self-loops or repeated edges.
*/
var validTree = function (n, edges) {
    if (n - 1 !== edges.length) return false;
    if (!edges.length) return true;
    const rep = [];
    for (let i = 0; i < n; i++) {
        rep[i] = i
    };
    const find = (n, m) => {
        while (rep[n] !== n) n = rep[n];
        return n
    }
    const union = (n,m)=>{
        const rN = find(n);
        const rM = find(m);

        if(rN===rM) return false;

        rep[rN] = rM;
        return true;
    }
    for(let [n,m] of edges) if(!union(n,m)) return false;
    return true
};
