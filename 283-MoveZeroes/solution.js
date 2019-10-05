/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var numberInd = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[numberInd++] = nums[i];
        }
    }
    for (i = numberInd; i < nums.length; i++) {
        nums[i] = 0;
    }
}

