/**
 * @param {string} digits
 * @return {string[]}
 */

var letters = [];
letters[2] = "abc";
letters[3] = "def";
letters[4] = "ghi";
letters[5] = "jkl";
letters[6] = "mno";
letters[7] = "pqrs";
letters[8] = "tuv";
letters[9] = "wxyz";

var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    var results = letters[digits[0]].split("");
    for (let i=1; i<digits.length; i++) {
        let prevResults = results;
        results = [];
        let currentChars = letters[digits[i]].split("");
        for (let currentChar of currentChars) {
            for (let prevResult of prevResults) {
                results.push(prevResult + currentChar);
            }
        }
    }
    return results;
};

