/**
 * @param {number[]} nums
 * @return {number}
 */

// use "already sorted" property, just check previous numn
var removeDuplicates = function(nums) {
    if(nums.length <= 1) {
        return nums.length;
    }
    var k = 1;
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] != nums[i-1]){
            nums[k++] = nums[i];
        }
    }
    return k;
};

// can solution
// var removeDuw plicates = function(nums) {
//     let seen = Object.create(null);
//     let index = 0;
//     for (let n of nums) {
//         if (seen[n] === undefined) {
//             seen[n] = 1;
//             nums[index] = n;
//             index++;
//         }
//     }
//     return index;
// };

