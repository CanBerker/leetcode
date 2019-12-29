/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion-and-without-stack/
// Morris traversal
function inorderTraversal (root) {
    let tourist = root;
    let solution = [];
    
    while(tourist !== null){
        let guide = tourist.left;
        
        if(tourist.left !== null) {
            while(guide.right !== null && guide.right !== tourist){
                guide = guide.right;
            }    
            if(guide.right === null){
                guide.right = tourist;
                tourist = tourist.left;
            } else {
                guide.right = null;
                solution.push(tourist.val);
                tourist = tourist.right
            } 
        } else {
            solution.push(tourist.val);
            tourist = tourist.right;
        }
    }
    return solution;
  
};



// stack solution
// var inorderTraversal = function(root) {
//     if (!root) return [];
//     const stack = [];
//     const solArr = [];
//     let node = root;
//     while (node || stack.length) {
//         while (node) {
//             stack.push(node);
//             node = node.left;
//         }
//         node = stack.pop();
//         solArr.push(node.val);
//         node = node.right;
//     }
//     return solArr;
// };

// can - recursive solution
// var inorderTraversal = function(root) {
//     if (root === null) {
//         return [];
//     }
//     let result = [];
//     result = result.concat(inorderTraversal(root.left));
//     result.push(root.val);
//     result = result.concat(inorderTraversal(root.right));
//     return result;
// };

