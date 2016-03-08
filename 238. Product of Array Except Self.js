/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 考虑数组中有0的情况，用除法不可解
var productExceptSelf = function(nums) {
    var left = [];
    var right = [];
    var result = [];
    var len = nums.length;
    var i;

    for (i = 0; i < len; i++) {
        left[i] = (left[i - 1] === undefined ? 1 : left[i - 1]) *
            (nums[i - 1] === undefined ? 1 : nums[i - 1]);
    }
    for (i = len - 1; i >= 0; i--) {
        right[i] = (right[i + 1] === undefined ? 1 : right[i + 1]) *
            (nums[i + 1] === undefined ? 1 : nums[i + 1]);
    }
    for (i = 0; i < len; i++) {
        result[i] = left[i] * right[i];
    }

    return result;
};

console.log(productExceptSelf([0, 0]));

// better solotion
var productExceptSelf = function(nums) {
    var output = [];
    var leftMult = 1;
    var rightMult = 1;
    for (var i=nums.length - 1; i >= 0; i--) {
        output[i] = rightMult;
        rightMult *= nums[i];
    }
    for (var j=0; j < nums.length; j++) {
        output[j] *= leftMult;
        leftMult *= nums[j];
    }
    return output;
};
