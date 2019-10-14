var climbStairs = function(n) {
    if (n < 3) {
        return n;
    }
    let oneStairAgo = 2;
    let twoStairsAgo = 1;
    let result = 0
    for (let i = 3; i <= n; i++) {
        result = oneStairAgo + twoStairsAgo;
        twoStairsAgo = oneStairAgo;
        oneStairAgo = result;
    }
    return result;
};

// // dynamic solution
// var climbStairs = function(n) {
//     return climb(n);
// };

// var dynamicClimb = function() {
//     let cache = {};
//     return function climb(n) {
//         if (n < 3) {
//             return n;
//         }
//         if (n in cache) {
//             return cache[n];
//         } else {
//             cache[n] = climb(n-2) + climb(n-1);
//             return cache[n];
//         }
//     }
// }

// var climb = dynamicClimb();

// // Factorial solution
// var climbStairs = function(n) {
//     let result = 1; // omit n!/n! -- only taking 1 step scenerio
//     for (let i = 1; i < Math.floor(n/2) + 1; i++) {
//         result += factorial(n-i) / (factorial(i) * factorial(n-2*i));
//     }
//     return result;
// };

// var cachedFactorial = function () {
//     let cache = {};
//     return function factorial(n) {
//         if (n < 2) {
//             return 1;
//         }
//         if (n in cache) {
//             return cache[n];
//         } else {
//             cache[n] = n * factorial(n-1);
//             return cache[n];
//         }
//     }
// }

// var factorial = cachedFactorial();

