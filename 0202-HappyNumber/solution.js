/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function(n) {
    var seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
};

function sumOfSquares(numString) {
    return numString.toString().split('').reduce(function(sum, num) {
        return sum + Math.pow(num, 2);
    }, 0);
}

// can solution
// var isHappy = function(n) {
    
//     let happy = n;
//     let iterations = 0
//     let digits;
//     while (happy !== 1) {
//         digits = ('' + happy).split('')
//         happy = digits.reduce((sum, val) => {
//             sum += Math.pow(parseInt(val), 2);
//             return sum
//         }, 0);
//         iterations++;
//         if (iterations == 100) { 
//             return false;
//         }
//     }
   
//     return true;
// };

