/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let brackets = [];
    for (let char of s) {
        if (
            char === '(' ||
            char === '{' ||
            char === '['
        ) {
            brackets.push(char);
        } 
        else if (char === ')' && brackets.pop() !== '(') return false;
        else if (char === '}' && brackets.pop() !== '{') return false;
        else if (char === ']' && brackets.pop() !== '[') return false;  
    }
    if (brackets.length !== 0) return false;
    return true;
};

