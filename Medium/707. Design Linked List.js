/*
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 

Example 1:

Input
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
Output
[null, null, null, null, 2, null, 3]

Explanation
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
myLinkedList.get(1);              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
myLinkedList.get(1);              // return 3
 

Constraints:

0 <= index, val <= 1000
Please do not use the built-in LinkedList library.
At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.
*/
class ListNode{
  constructor(val){
    this.next = null;
    this.val = val;
  }
}

class MyLinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }
  addAtHead(val){
    const node = new ListNode(val);
    node.next = this.head;
    this.head = node;
    this.size += 1;
  }
  addAtTail(val){
    const node = new ListNode(val);
    if(!this.head){
      return this.addAtHead(val);
    }
    let copyList = this.head;
    while(copyList.next){
      copyList = copyList.next;
    };
    copyList.next = node;
    this.size +=1;
  }
  addAtIndex(index,val){
     if (index === 0) {
        return  this.addAtHead(val);
    }
    const node = new ListNode(val);
    if(index === this.size)  {
        return  this.addAtTail(val);
    }
    if (index > this.size) return;
    let copyList = this.head;
    for( let i=0;i<index-1;i++){
      copyList = copyList.next;
    }
    const allRightValues = copyList.next;
    copyList.next = node;
    node.next = allRightValues;
    this.size++;
  }
  deleteAtIndex(index){
    if(index<0||index>=this.size) return -1;
    let copyList = this.head;
    if(index===0) {
      this.head = this.head.next;
      return this.size--
    }
    for(let i=0;i<index-1;i++){
      copyList = copyList.next;
    }
    copyList.next = copyList.next.next;
    this.size--;
  }
  get(index){
     if(index<0||index>=this.size) return -1;
      let copyList = this.head;
      for(let i =0;i<index;i++){
        copyList = copyList.next;
      }
      return copyList.val;
  }
}
