/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    const result = [[1]];
    for (let n = 1; n < numRows; n++) {
        const row = [1]
        for (let i = 0; i < n-1; i++)   {
            row.push(result[n-1][i] + result[n-1][i+1]);
        }
        row.push(1);
        result.push(row);
    }
    return result;
};

