/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hashObj = {};

    for (var i = 0; i < nums.length; i++) {
        if (hashObj[nums[i]] !== true) {
            hashObj[nums[i]] = true;
        } else {
            return true;
        }
    }

    return false;
};
