/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// can solution
var isPalindrome = function(head) {
    let size = 0;
    let current = head;
    while (current !== null) {
        size++;
        current = current.next;
    }
    current = head;
    let index = 0
    let stack = []
    while (index < Math.floor(size/2)) {
        stack.push(current.val);
        current = current.next
        index++;
    }
    // skip the middle element
    if (size % 2 !== 0) {
        current = current.next;
        index++;
    }
    while (index < size) {
        if(stack.pop() !== (current.val)) return false
        current = current.next
        index++;
    }
    return true;    
};

// alternative solution by reversing half of the list
// var isPalindrome = function(head) {
//     if(head === null) return true;
//     if(head.next === null) return true;
    
//     var slowptr = head;
//     var fastptr = head;
//     var leftptr = head;
//     var rightptr;
    
//     while(fastptr && fastptr.next) {
//         slowptr = slowptr.next;
//         fastptr = fastptr.next;
//         if(fastptr && fastptr.next) fastptr = fastptr.next;
//     }
    
//     rightptr = reverse(slowptr);
    
//     while(rightptr) {
//         if(rightptr.val != leftptr.val) return false;
//         leftptr = leftptr.next ? leftptr.next : null;
//         rightptr = rightptr.next ? rightptr.next : null;
//     }
//     return true;
//  };
 
//  var reverse = function(head){
//      var current = head;
//      var next;
//      var prev;
     
//      while(current) {
//          next = current.next;
//          current.next = prev;
//          prev = current;
//          current = next;
//      }
     
//      return prev;
//  };

