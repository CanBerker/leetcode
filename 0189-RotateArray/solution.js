/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// // Use a new array
// // O(n) space O(n) time complexity
// var rotate = function(nums, k) {
//     k = k % nums.length;
//     const result = [...nums];
//     for (let i=0; i<result.length; i++) {
//         nums[(i+k)%result.length] = result[i];
//     }
// };


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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// // use reversing
// // O(1) space complexity O(n) time complexity
// var rotate = function(nums, k) {
//     k = k % nums.length;
//     reverseInPlace(nums, 0, nums.length-1-k);
//     reverseInPlace(nums, nums.length-k, nums.length-1);
//     reverseInPlace(nums, 0, nums.length-1)
    
// };
// var reverseInPlace = function(nums, left, right) {
//     let tmp;
//     while(left< right) {
//         tmp = nums[left];
//         nums[left] = nums[right];
//         nums[right] = tmp;
//         left++;
//         right--;
//     }
// }


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// // Use a new array
// // O(n) space O(n) time complexity
// var rotate = function(nums, k) {
//     k = k % nums.length;
//     shiftAllByK(nums, k);
// };
// var shiftAllByK = function(nums, k) {
//     for (let i=0; i<nums.length; i++) {
//         console.log(`${i}, ${(i+k) % nums.length}`);
//         swap(nums, i, (i+k) % nums.length);
//     }
// }
// var swap = function(nums, i, j) {
//     let tmp = nums[j];
//     nums[j] = nums[i];
//     nums[i] = tmp;
// 


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Circular rotation
// O(n) space O(n) time complexity
var rotate = function(nums, k) {
    k = k % nums.length;
    let visited = 0;
    for (let start = 0; visited < nums.length; start++) {
        let current = start;
        let prevValue = nums[start];
        do{
            let nextIndex = (current + k) % nums.length;
            let tmp = nums[nextIndex];
            nums[nextIndex] = prevValue;
            prevValue = tmp;
            current = nextIndex;
            visited++;
        } while(current != start)
    }
};


