/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
    if (needle === "") {
        return 0;
    }
    let h = 0;
    while (h < haystack.length) {
        let n = 0;
        while (n !== needle.length && haystack[h+n] === needle[n]) {
            n++;
        }
        if (n === needle.length) {
            return h;
        }
        h++;
    }
    return -1;
}

// built-in function
// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle);
// };

// knuth morris prath implementation - keep a kmax of needle and fallback to the correct location upon mismatch
// O(m) preprocessing and space, O(n) time complexity

// Boyer moore implementation - slide the needle over the haystack
// O(m+k) preprocessing, O(k)space, O(nm) worst - O(n/m)  best time complexity

