/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let i=0; i< Math.floor(s.length / 2) ; i ++) {
        swap(s, i, s.length-1-i);
    }
};

var swap = function (arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}