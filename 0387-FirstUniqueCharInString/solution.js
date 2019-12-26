/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const chars = new Map();
    for (let i=0; i<s.length; i++) {
        if (!chars.has(s[i])) {
            chars.set(s[i], i);
        } else { 
            chars.set(s[i], 'duplicate');
        }
    }

    for (let k of chars.entries()) {
        if (k[1] !== 'duplicate') {
            return k[1];
        }
    }
    return -1;
};

