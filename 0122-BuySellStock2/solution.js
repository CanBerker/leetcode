/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let totalProfit=0;
    let currentProfit=0;
    if (prices.length < 2) {
        return 0;
    }
    for (let i = 0; i < prices.length-1; i ++) {
        currentProfit = prices[i+1] - prices[i];
        if (currentProfit > 0) {
            totalProfit += currentProfit;
        } else {
            currentProfit = 0;
        }
    }
    return totalProfit;
    
};

