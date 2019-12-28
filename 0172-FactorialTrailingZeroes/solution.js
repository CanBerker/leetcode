/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let count = 0;
    let i = 5;
    while ( n / i >= 1) {
        count = count + Math.floor(n / i);
        i *= 5
    }
    return count;
};


// can solution
// var trailingZeroes = function(n) {
//     // assumption = count of 2s will always be more than counts of 5s
//     let totalFiveCount = 0;
//     let tmp;
//     let count;
//     for (let i = 5; i <=n; i++) {
//         let tmp = i;
//         count = 0;
//         while (true) {
//             if (tmp % 5 !== 0) {
//                 break;
//             }
//             count++;
//             tmp /= 5;            
//         }
//         totalFiveCount += count;
//     }
//     return totalFiveCount;
// };

