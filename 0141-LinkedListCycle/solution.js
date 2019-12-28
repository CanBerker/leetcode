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


// slow + fast runner algorithm
const hasCycle = head => {
    let p1 = head
    let p2 = head
    
    while (p2 && p2.next && p2.next.next) {
        p1 = p1.next
        p2 = p2.next.next
        
        if (p1 === p2) {
            return true
        }
    }
    
    return false
}

// can solution
// var hasCycle = function(head) {
//     let seen = new Set();
//     let current = head;
//     while (current !== null) {
//         if (seen.has(current)) {
//             return true;
//         }
//         seen.add(current);
//         current = current.next;
//     }
//     return false;
// };

