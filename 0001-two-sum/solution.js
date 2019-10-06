/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seen = []
    for (let i=0; i<nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (seen[complement] !== undefined) {
            return [seen[complement], i];
        } else {    
            seen[num] = i;
        }
    }
};

