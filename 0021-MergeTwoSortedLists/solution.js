
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let resultHead;
    let previous;
    if (l2 === null || (l1 !== null && l1.val <= l2.val)) {
        resultHead = l1;
        if (l1 !== null) {
            l1 = l1.next;
        }            
    } else {
        resultHead = l2;
        l2 = l2.next;
    }
    previous = resultHead;
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            previous.next = l1;
            previous = l1;
            l1 = l1.next;
        } else {
            previous.next = l2;
            previous = l2;
            l2 = l2.next;
        }
    }
    while (l1 !== null) {
        previous.next = l1;
        previous = l1;
        l1 = l1.next;
    }
    while (l2 !== null) {
        previous.next = l2;
        previous = l2;
        l2 = l2.next;
    }
    
    return resultHead;
};

