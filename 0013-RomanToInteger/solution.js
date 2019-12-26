symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function(s) {
    value = 0;
    for(let i = 0; i < s.length; i+=1){
        symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
    }
    return value
};

/**
 * @param {string} s
 * @return {number}
 */
// can solution
// var romanToInt = function(s) {
//     let letterMap = {
//         "I": 1,
//         "V": 5,
//         "X": 10,
//         "L": 50,
//         "C": 100,
//         "D": 500,
//         "M": 1000,
//     }
    
//     let firstLetterIndex = 0;
//     let secondLetterIndex = 0;
//     let result = 0;
//     while (s[firstLetterIndex] != null) {
//         if (firstLetterIndex === secondLetterIndex) {
//             secondLetterIndex += 1;
//         }
//         if (s[secondLetterIndex] === null) {
//             result += s[firstLetterIndex];
//             firstLetterIndex++;
//         } else {
//             if (isSubtraction(s, firstLetterIndex, secondLetterIndex)) {
//                 result += (letterMap[s[secondLetterIndex]] - letterMap[s[firstLetterIndex]]);
//                 firstLetterIndex += 2;
//                 secondLetterIndex += 2;
//             } else {
//                 result += letterMap[s[firstLetterIndex]];
//                 firstLetterIndex += 1;
//             }
//         }
//     }
//     return result;
// };

// var isSubtraction = function(s, firstLetterIndex, secondLetterIndex) {
//     if (
//         (s[firstLetterIndex]  === "I" && (s[secondLetterIndex] === "V" || s[secondLetterIndex] === "X")) ||
//         (s[firstLetterIndex]  === "X" && (s[secondLetterIndex] === "L" || s[secondLetterIndex] === "C")) ||
//         (s[firstLetterIndex]  === "C" && (s[secondLetterIndex] === "D" || s[secondLetterIndex] === "M"))
//     ) {
//         return true;
//     }
//     return false;
// }
 
