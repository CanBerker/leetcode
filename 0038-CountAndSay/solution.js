/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = "1"
    let tmpResult;
    let chars;
    let charIndex;
    let prevChar;
    let consecCharCount;
    for (let i = 1; i < n; i++) {
        tmpResult = '';
        chars = result.split('');
        charIndex = 0;
        while (charIndex < chars.length) {
            prevChar = chars[charIndex];
            charIndex++;
            consecCharCount = 1;
            while (chars[charIndex] === prevChar) {
                consecCharCount++;
                charIndex++;
            }
            tmpResult += consecCharCount + prevChar;
        }        
        result = tmpResult;
    }
    return result;
};

