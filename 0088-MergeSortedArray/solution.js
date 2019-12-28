/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// merge by handling largest values first
// O(n) time complexity, O(1) additional space complexity
var merge = function(nums1, m, nums2, n) {
    let idx1 = m-1;
    let idx2 = n-1;
    let idx3 = m+n-1;
    while (idx2 >= 0) {
        nums1[idx3--] = nums1[idx1] > nums2[idx2] ?
            nums1[idx1--] :
            nums2[idx2--] ;
    }    
};


// can insertion sort solution
// O(n2) time cimplexity, O(1) additional space complexity
// var merge = function(nums1, m, nums2, n) {
//     // copy contents of nums2 into nums1
//     for (let i=0; i<n; i++) {
//         nums1[m+i] = nums2[i]
//     }
//     insertionSort(nums1);
// };

// var insertionSort = function(arr) {
//     for (let i=0; i< arr.length; i++) {
//         let tmp = arr[i];
//         let j = i-1;
//         while (j >= 0 && tmp < arr[j]) {
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = tmp;
//     }    
// }

// js built-in solution
// O(nlogn) ? complexity - depends on js sort, 
// var merge = function(nums1, m, nums2, n) {
//   nums1.splice(m, nums1.length);
//   nums1.push(...nums2.splice(0, n));
//   nums1.sort((a, b) => a - b);
// };

