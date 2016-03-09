/**
 * @param {number[]} prices
 * @return {number}
 */
// 找到一段连续的最大的上涨趋势
var maxProfit = function(prices) {
    var profit = 0;
    var max = prices[0] || 0;
    var min = prices[0] || 0;

    function checkProfit() {
        if (max - min > profit) profit = max - min;
    }

    for (var i = 1; i < prices.length; i++) {
        // 每次遇到一个更小值的时候就要进行一次利润结算
        if (prices[i] < min) {
            checkProfit();
            min = prices[i];
            max = prices[i];
        } else if (prices[i] > max) {
            max = prices[i];
            checkProfit();
        }
    }

    return profit;
};

console.log(maxProfit([3,2,6,5,0,3]));
