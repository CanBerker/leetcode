/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let seen = Object.create(null);
    let index = 0;
    for (let n of nums) {
        if (seen[n] === undefined) {
            seen[n] = 1;
            nums[index] = n;
            index++;
        }
    }
    return index;
};

