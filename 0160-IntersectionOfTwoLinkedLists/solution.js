/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// can solution
// O(m+n) time complexity; O(m) space complexity
var getIntersectionNode = function(headA, headB) {
    let seen = new Set();
    while (headA != null) {
        seen.add(headA);
        headA = headA.next;
    }
    while (headB != null) {
        if (seen.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }
    return null;
};

// two pointers solution - notice the pointers switch heads to even out the path
// const getIntersectionNode = (headA, headB) => {
//     if (!headA || !headB) {
//         return null
//     }
    
//     let p1 = headA
//     let p2 = headB
    
//     while (p1 !== p2) {
//         p1 = p1 ? p1.next : headB   // notice the switch
//         p2 = p2 ? p2.next : headA
//     }
    
//     return p1
// }

