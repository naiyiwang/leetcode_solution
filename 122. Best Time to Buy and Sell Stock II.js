/**
 * @param {number[]} prices
 * @return {number}
 */
// 在下跌阶段的转折点买，在上涨阶段的转折点卖，一直上涨开始买最后卖，一直下跌利润为0
// 可以转化为 - 每次上涨的价格就是利润
var maxProfit = function(prices) {
    var profit = 0;

    for (var i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) {
            profit += (prices[i] - prices[i-1]);
        }
    }

    return profit;
};
