/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var countMap = {};
    var len = nums.length;
    var boundry = parseInt(len / 2, 10);

    for (var i = 0; i < len; i++) {
        var num = nums[i];
        countMap[num] = ++countMap[num] || 1;
        if (countMap[num] > boundry) return num;
    }
};
