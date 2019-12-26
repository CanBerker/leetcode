/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let seen = new Map();
    for (const n of nums) {
        if (!seen.has(n)) {
            seen.set(n, 1);
        } else {
            seen.set(n, seen.get(n) + 1);
        }
    }
    for (let entry of seen.entries()) {
        if (entry[1] === 1) {
            return entry[0];
        }
    }
};

