/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 104
0 <= lists[i].length <= 500
-104 <= lists[i][j] <= 104
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 104.
*/
const mergeLists = (l1, l2) => {
  if (!l1) {
    return l2
  } else if (!l2) {
    return l1
  } else if (l1.val < l2.val) {
    l1.next = mergeLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeLists(l1, l2.next)
    return l2
  }
}
var mergeKLists = function (lists) {
  const amount = lists.length;
  let interval = 1;
  while (interval < amount) {
    for (let i = 0; i < amount - interval; i += interval * 2) {
      lists[i] = mergeLists(lists[i], lists[i + interval])
    }
    interval *= 2
  }
  return amount > 0 ? lists[0] : null
};
