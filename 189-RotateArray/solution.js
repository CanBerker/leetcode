/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Use a new array
// O(n) space O(n) time complexity
var rotate = function(nums, k) {
    k = k % nums.length;
    const result = [...nums];
    for (let i=0; i<result.length; i++) {
        nums[(i+k)%result.length] = result[i];
    }
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// // use built-in js fns
// //var rotate = function(nums, k) {
//     k = k % nums.length;
//     while (k != 0) {
//         let el = nums.pop();
//         nums.unshift(el);
//         k--;
//     }
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// // use a temp variable
// // O(1) space O(n*k) time complexity (time limit)
// var rotate = function(nums, k) {
//     k = k % nums.length;
//     while (k != 0) {
//         shiftAll(nums);
//         k--;
//     }
// };
// var shiftAll = function(nums) {
//     let tmp = null;
//     let prev = null;
//     for (let i=nums.length-1; i>0; i--) {
//         prev = (i-1)%nums.length;
//         tmp = nums[prev];
//         nums[prev] = nums[i];
//         nums[i] = tmp;
//     }
// }

