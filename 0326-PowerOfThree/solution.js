/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return n >= 0 && 3486784401 % n === 0;  // 3486784401 (3^20 -1)  1162261467 (3^19-1)
};

// with loop
// var isPowerOfThree = function(n) {
//     if (n === 1 || n === 3) return true;
//     while (n > 3) {
//         n /= 3;
//         if (n === 3) return true;
//     }
//     return false;
// };

