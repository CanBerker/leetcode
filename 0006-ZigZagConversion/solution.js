/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const matrix = [];
    let charIndex = 0;
    let downward = true;
    let rowIndex = 0;
    let column;
    while (charIndex < s.length) {
        if (downward) {
            column = Array(numRows).fill("");
            rowIndex = 0;
            while (rowIndex < numRows && charIndex < s.length) {
                column[rowIndex++] = s[charIndex++];
            }
            matrix.push(column);
            // console.log('upward', column);
        } else {
            // move upward in a diagonal, fill 1 char at rowIndex for every column
            rowIndex = numRows-2; // 1 for length, 1 for having last row empty
            while (rowIndex > 0 && charIndex < s.length) {
                column = Array(numRows).fill("");
                column[rowIndex--] = s[charIndex++];
                matrix.push(column);
                // console.log('downward', column);
            }
        }
        downward = !downward;
    }
    // read out matrix result
    let result = "";
    if (matrix.length !== 0) {
        for (let i=0; i < matrix[0].length; i++) {
            for (let j=0; j< matrix.length; j++) {
                if (matrix[j][i] !== "") {
                    result += matrix[j][i];
                }
            }
        }
    }
    return result;

};


