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
var isValidBST = function(root) {
    if (!root) {
        return true;
    }
    return isValidBSTRecursive(root, null, null);
};

var isValidBSTRecursive = function(node, lowerLimit, upperLimit) {
    if ((lowerLimit !== null && node.val <= lowerLimit)
        || (upperLimit !== null && node.val >= upperLimit)) {
        return false;
    }

    if (node.left) {
        if (!isValidBSTRecursive(node.left, lowerLimit, node.val)) {
            return false;
        }
    }
    if (node.right) {
        if (!isValidBSTRecursive(node.right, node.val, upperLimit)) {
            return false;
        }
    }
    return true;
}

