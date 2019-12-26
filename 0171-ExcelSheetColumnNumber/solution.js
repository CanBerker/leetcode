
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let result = 0
    const CodeA = "A".charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        result += (s.charCodeAt(s.length-i-1) - CodeA + 1) *  Math.pow(26, i);
    }
    return result
};

