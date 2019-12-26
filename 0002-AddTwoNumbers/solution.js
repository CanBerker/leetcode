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
var addTwoNumbers = function(l1, l2) {
    let result = null;
    let previous = null;
    let current = null;
    
    let sum = 0;
    let carry = 0;
    while (l1 !== null && l2 !== null) {
        sum = l1.val + l2.val + carry;
        carry = 0;
        if (sum >= 10) {
            carry = 1;
            sum %= 10;
        }
        current = {val: sum, next: null};
        if (result === null) {
            result = current;
        } else {
            previous.next = current;
        }
        previous = current;
        l1 = l1.next;
        l2 = l2.next;
    }
    while (l1 !== null) {
        sum = l1.val + carry;
        carry = 0;
        if (sum >= 10) {
            carry = 1;
            sum %= 10;
        }
        current = {val: sum, next: null};     
        previous.next = current;
        previous = current;
        l1 = l1.next;
    }
    while (l2 !== null) {
        sum = l2.val + carry;
        carry = 0;
        if (sum >= 10) {
            carry = 1;
            sum %= 10;
        }
        current = {val: sum, next: null};
        previous.next = current;
        previous = current;
        l2 = l2.next;
    }
    if (carry == 1) {
        previous.next = {val: 1 , next: null};
    }
    return result;    
};
