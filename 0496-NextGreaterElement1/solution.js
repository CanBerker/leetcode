/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// public solution - handles the worst case of mine with a stack
Array.prototype.lastElSmallerThan = function(num) {
    return this.length > 0 && this[this.length - 1] < num;
}

const nextGreaterElement = (nums1, nums2) => {
    const nextGreaterElMap = {};
    const stack = [];
    for (const num of nums2) {
        while (stack.lastElSmallerThan(num)) {
            nextGreaterElMap[stack.pop()] = num;
        }
        stack.push(num);
    }
    stack.forEach(num => {
        nextGreaterElMap[num] = -1;
    });
    
    return nums1.map(num => nextGreaterElMap[num]);
};

// can solution time worst case O(nˆ2)[inverse sorted list], space O(n) 
// can solution - time O(n^2) - memory O(1)
// var nextGreaterElement = function(nums1, nums2) {
//     const result = [];
//     for (let n of nums1) {
//         let j = nums2.findIndex(n2 => n === n2);
//         while (j !== -1 && j < nums2.length) {
//             j++;
//             if (nums2[j] > n) {
//                 result.push(nums2[j]);
//                 break;
//             }
//         }
//         if (j === nums2.length) {
//             result.push(-1);
//         }
//     }
//     return result;
// };

