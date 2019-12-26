/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let toVisit = [];
    let max = 0;
    if (root === null) {
        return max;
    }
    toVisit.push([root, 1]);
    while (toVisit.length !== 0) {
        let current = toVisit.shift();
        if (current[1] > max) {
            max = current[1];
        }
        if (current[0].left !== null) {
            toVisit.push([current[0].left, current[1] + 1]);
        }
        if (current[0].right !== null) {
            toVisit.push([current[0].right, current[1] + 1]);
        }
    }
    return max;    
};

