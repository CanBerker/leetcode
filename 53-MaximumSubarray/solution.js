/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxResult = 0;
    let negativeMaxResult = Number.MIN_SAFE_INTEGER;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
        if (result > maxResult) {
            maxResult = result;
        }
        // handle 'only negative' and 'only zero' cases
        if (result <= 0 && result > negativeMaxResult) {
            negativeMaxResult = result;
        }
        if (result < 0) {
            result = 0
        }
    }
    return maxResult || negativeMaxResult;
};

