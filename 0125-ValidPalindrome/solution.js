/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^[0-9a-zA-Z]/g, '').toLowerCase();
    let half = Math.floor(s.length/2);
    let i = 0;
    while (i < half) {
        if (s[i] !== s[s.length-1-i]) {
            return false;
        }
        i++;
    }
    return true;
};

