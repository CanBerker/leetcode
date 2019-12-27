/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// iterative
var isSymmetric = function(root) {
    if (!root) return true;
    let leftArr = [root.left], rightArr = [root.right];
    while(leftArr.length && rightArr.length) {
        let l = leftArr.pop(), r = rightArr.pop();
        if (!l && !r) continue;
        if (!l || !r) return false;
        if (l.val !== r.val) return false;
        leftArr.push(l && l.left);
        leftArr.push(l && l.right);
        rightArr.push(r && r.right);
        rightArr.push(r && r.left);
    }
    return true;
};

// recursive
// var isSymmetric = function(root) {
//     return helper(root, root)
// };

// const helper = function(p, q) {
//     if (p == null && q == null)
//         return true
//     if (p == null || q == null)
//         return false
//     return p.val == q.val && helper(p.left, q.right) && helper(p.right, q.left)
// }

