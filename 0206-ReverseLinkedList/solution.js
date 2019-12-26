/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let nextTmp null;
    while (curr != null) {
        nextTmp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTmp;
    }
    return prev;
};

// can solution
// var reverseList = function(head) {
//     const stack = [];
//     if (head === null) {
//         return head;
//     }
//     while (head !== null) {
//         stack.push(head);
//         head = head.next;
//     }
//     const resultHead = stack.pop();
//     let previous = resultHead;
//     while (stack.length !== 0) {
//         current = stack.pop();
//         previous.next = current;
//         previous = current;
//     }
//     previous.next = null;
//     return resultHead;
// };

