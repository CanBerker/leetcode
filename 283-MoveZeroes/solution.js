
const findZeroIndex = function (nums, current) {
    while (current < nums.length) {
        current++;
        if (nums[current] === 0) {
            break;
        }
    }
    if (current === nums.length) {
        return -1;
    }
    return current;
}

const findNumberIndex = function (nums, current) {
    while (current < nums.length) {
        current++;
        if (nums[current] !== 0) {
            break;
        }
    }
    if (current === nums.length) {
        return -1;
    }
    return current;
}

const swapNumberAndZero = function (nums, current, numberIndex) {
    nums[current] = nums[numberIndex];
    nums[numberIndex] = 0;
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let current = -1;
    while (true) {
        current = findZeroIndex(nums, current)
        if (current === -1) {
            return nums;
        }

        const numberIndex = findNumberIndex(nums, current);
        if (numberIndex === -1) {
            return nums;
        }
        
        swapNumberAndZero(nums, current, numberIndex);
    }
};

