/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const robD = robDynamic(nums);
    return robD(0, 0);
};


var robDynamic = function(nums) {
    const cache = {};
    return function robD(gain, index) {
        if (index in cache) {
            return gain + cache[index];
        } else {
            if (index >= nums.length) {
                // console.log(`returning: ${gain} for index : ${index}`)
                return gain;
            } else {
                // console.log(`gain: ${gain}, index: ${index}`)
                const skipGain = robD(gain, index + 1);
                const robGain = robD(gain + nums[index], index + 2);
                const selectedGain = Math.max(skipGain, robGain);
                cache[index] = selectedGain;
                return selectedGain;
                // console.log(skipGain);
                // console.log(robGain);
                // console.log(`Max: ${Math.max(skipGain, robGain)}`);
                // console.log(cache);
            }
        }
    }
}

