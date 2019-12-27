/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let shorterArray;
    let longerArray
    if (nums1.length < nums2.length) {
        shorterArray = nums1;
        longerArray = nums2;
    } else {
        shorterArray = nums2;
        longerArray = nums1;
    }
    let seen = new Map();
    for (const n of shorterArray) {
        if (!seen.has(n)) {
            seen.set(n, 1);
        } else {
            seen.set(n, seen.get(n) + 1);
        }
    }
    const results = []
    for (const n of longerArray) {
        if (seen.get(n) > 0) {
            seen.set(n, seen.get(n) - 1);
            results.push(n);
        }        
    }
    return results;
};

