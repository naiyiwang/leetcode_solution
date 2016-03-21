/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    for (var i = 0; i < nums.length; i++) {
        // 当前值大于等于target，则返回i。因为i要么是相等的位置要么是插入的位置
        if (nums[i] >= target) {
            return i;
        }
    }
    return i;
};
