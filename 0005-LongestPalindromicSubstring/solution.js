/**
 * @param {string} s
 * @return {string}
 */
// expand around the center solution
var longestPalindrome = function(s) {
  var max = '';
  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if ((right - left - 1) > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
};


// can longest palindrome solution
// var longestPalindrome = function(s) {
//     // find the longest common substring of s and reversed s
//     return longestCommonSubstring(s, s.split("").reverse().join(""));
    
// };

// var longestCommonSubstring = function(s1, s2) {
//     const longestSubstringEndingAtIndices = 
//           Array(s1.length+1).fill().map(()=>Array(s2.length+1).fill())
          
//     let result = "";
//     for (let i=0; i <= s1.length; i++) {
//         for (let j=0; j <= s2.length; j++) {
//             // 0 indices work as initializers
//             if (i === 0 || j === 0) {
//                 longestSubstringEndingAtIndices[i][j] = "";
//             } else if (s1[i-1] === s2[j-1]) {
//                 console.log(i, j, s1[i-1])
//                 longestSubstringEndingAtIndices[i][j] = 
//                     longestSubstringEndingAtIndices[i-1][j-1] + s1[i-1];
//                 if (longestSubstringEndingAtIndices[i][j].length > result.length) {
//                     // only update the result if reverse text does not exist 
//                     // doesnt work atm (check solution)
//                     result = longestSubstringEndingAtIndices[i][j];
//                 }
//             } else {
//                 longestSubstringEndingAtIndices[i][j] = "";
//             }
//         }
//     }
//     console.log(longestSubstringEndingAtIndices);
//     return result;
// }


// correct algorithm implementation but we need longest common substring
// var longestCommonSubsequenceRecursive = function(s1, s2) {
//     // if length (s1 || s2) = 0 return 0
//     if (s1.length === 0 || s2.length === 0) {
//         return "";
//     }
//     // if last character matches
//     if (s1[s1.length-1] === s2[s2.length-1]) {
//         // return 1 + lcs(s1-1, s2-1)
//         return longestCommonSubstringRecursive(
//             s1.substring(0, s1.length-1),
//             s2.substring(0, s2.length-1)
//         ) + s1[s1.length-1];
//     }
//     // if no match
//     // return max(lcs(s1-1, s2), lcs(s1, s2-1))
//     const left = longestCommonSubstringRecursive(
//         s1.substring(0, s1.length-1),
//         s2
//     )
//     const right = longestCommonSubstringRecursive(
//         s1,
//         s2.substring(0, s2.length-1)
//     )
    
//     return left.length > right.length ? left : right;         
// }

