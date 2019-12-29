/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function(x) {
    if (x <= 1) {
        return x;
    }
    let left = 0
    let right = x;
    let mid = Math.floor((x)/2);
    let midSquare = Math.pow(mid, 2);
    while (midSquare !== x && left < right-1) {
        if (midSquare < x) {
            left = mid;
        } else {
            right = mid
        }
        mid = Math.floor((left + right)/2);
        midSquare = Math.pow(mid, 2);
    }
    return mid;    
};

// builtin solution
// var mySqrt = function(x) {
//     if (x <= 1) {
//         return x;
//     }
//     return Math.floor(Math.sqrt(x));
// };

