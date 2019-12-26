/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const letters1 = getLetterMap(s);
    const letters2 = getLetterMap(t);
    
    for (let e of letters1.entries()) {
        if (!letters2.has(e[0])) {
            return false;
        }
        if (letters2.get(e[0]) !== e[1]) {
            return false;
        }
    }
    
    for (let e of letters2.entries()) {
        if (!letters1.has(e[0])) {
            return false;
        }
        if (letters1.get(e[0]) !== e[1]) {
            return false;
        }
    }
    
    return true;
}; 

var getLetterMap = function (s) {
    const letters = new Map;
    for (let l of s) {
        if (!letters.has(l)) {
            letters.set(l, 1);
        } else {
            letters.set(l, letters.get(l) + 1);
        }
    }
    return letters;
}


