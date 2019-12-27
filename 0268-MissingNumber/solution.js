/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length;//length of array.
    let sum = (len*(len+1))/2; // sum of all nos from 0 to n by series formula
    let sum2 = nums.reduce((a,c)=> a+c); //sum of array elements.
    return sum-sum2; //difference is the answer
};


// can solution
// var missingNumber = function(nums) {
//     let currentSum = 0;
//     let n = 0;
//     let zeroFound = false;
//     for (let i=0; i<nums.length; i++) {
//         if (nums[i] === 0) {
//             zeroFound = true;
//         } else {
//             currentSum += nums[i];
//         }        
//         if (nums[i] > n) {
//             n = nums[i];
//         }
//     }
//     if (zeroFound === false) {
//         return 0;
//     }
//     let diff = n*(n+1)/2 - currentSum;
//     if (diff === 0) {
//         return n+1
//     }
//     return diff;
// };


