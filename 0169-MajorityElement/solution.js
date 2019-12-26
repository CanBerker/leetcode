/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counts = new Map();
    const majCount = Math.floor(nums.length/2);
    if (nums.length === 1) {
        return nums[0];
    }
    for (let n of nums) {
        if (!counts.has(n)) {
            counts.set(n, 1);
        } else {
            if (counts.get(n) + 1 > majCount) { 
                return n;
            } else {
                counts.set(n, counts.get(n) + 1);
            }            
        }
    }
};

