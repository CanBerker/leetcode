/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let currentMax = 0;
    let current = 0;
    for (let i = 0; i < prices.length-1; i++) {
        current += (prices[i+1] - prices[i]);
        if (current > currentMax) {
            currentMax = current;
        }
        if (current < 0) {
            current = 0;
        }
    }
    return currentMax;
};

