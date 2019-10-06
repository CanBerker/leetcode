/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const unique = {};
    for (let i=0; i<nums.length; i++) {
        if (unique[nums[i]] != undefined) {
            return true;
        } else {
            unique[nums[i]] = true;
        }
    }
    return false;
};

