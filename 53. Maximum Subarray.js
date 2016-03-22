/**
 * @param {number[]} nums
 * @return {number}
 */
// 用归纳的思想解决问题：对于nums[0]来说，max就是数组中唯一的那个数；
// 对于nums[1...n-1]来说，max要么是不以nums[n-1]结尾的子序列，要么是以nums[n-1]结尾的子序列；
// 所以对于nums[1...n]，max就是Math.max(max, nums[n])，或者Math.max(max + nums[n], nums[n])，分别对应nums[1...n-1]中的两种情况。
// 最后合并一下规则，我们只需要知道至今为止的子序列最大值max，至今为止包含最后一个元素的子序列的最大值endHereMax就行了
var maxSubArray = function(nums) {
    var max = nums[0];
    var endHereMax = nums[0];

    for (var i = 1; i < nums.length; i++) {
        endHereMax = Math.max(endHereMax + nums[i], nums[i]);
        max = Math.max(max, endHereMax);
    }

    return max;
};
