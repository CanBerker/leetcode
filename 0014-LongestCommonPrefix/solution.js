/**
 * @param {string[]} strs
 * @return {string}
 */
// can solution
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) {
        return "";
    }
    let common = strs[0];
    let str;
    for (let i = 0; i < strs.length; i++) {
        str = strs[i];
        let j = 0;
        while (j < common.length && common[j] === str[j]) {
            j++;
        }
        common = common.substring(0, j);
    }
    return common;
};

// str search solution
// var longestCommonPrefix = function(strs) {    
//     if(strs.length == 0) {
//         return "";
//     }
//     let str = strs[0];
//     for (const word of strs) {
//         while (word.indexOf(str) != 0) {
//             str = str.substring(0, str.length - 1);
//             if (str === "")
//                 break;
//         }
//     }
//     return str;
// };


