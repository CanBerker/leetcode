/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    return twoPointer(height);
};

var bruteForce = function(height) {
    let max = 0;
    for (let i = 0; i < height.length; i ++) {
        for (let j = i + 1; j < height.length; j ++) {
            let current = (j-i) * Math.min(height[i], height[j]);
            if (current > max) {
                max = current;
            }
            
        }
    }
    return max;
}

var twoPointer = function (height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length-1;
    while (left < right) {
        let currentArea = (right - left) * Math.min(height[left], height[right]);
        maxArea = Math.max(currentArea, maxArea);
        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }
    return maxArea;
}

