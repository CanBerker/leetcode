// can solution
// recursion with cache
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
                return gain;
            } else {
                const skipGain = robD(gain, index + 1);
                const robGain = robD(gain + nums[index], index + 2);
                const selectedGain = Math.max(skipGain, robGain);
                cache[index] = selectedGain;
                return selectedGain;
            }
        }
    }
}

// simple dp solution with array
// var rob = function(nums) {
//     if(nums.length===0) return 0;
//     let maxSum = [];
//     maxSum[0] = nums[0];
//     maxSum[1] = Math.max(nums[0], nums[1]);
    
//     for (let i = 2; i < nums.length; i++) {
//         maxSum[i] = Math.max(maxSum[i-1], maxSum[i-2] + nums[i])
//     }
//     return maxSum[nums.length-1];
// }




// pure recursion with no cache -- timeout
// var rob = function(nums) {
//     if (nums.length === 0) {
//         return 0;
//     }
//     return robRec(nums, nums.length-1)
// }

// var robRec = function(nums, index) {
//     if (index === 0) {
//       return nums[0];
//     }
//     if (index === 1) {
//         return Math.max(nums[0], nums[1]);
//     }
//     return Math.max(
//         robRec(nums, index-1),
//         robRec(nums, index-2) + nums[index],
//     )
// }



