/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var total = 0;
    var actualTotal = 0;

    for (var i = 0; i < nums.length; i++) {
        actualTotal += nums[i];
    }
    for (var j = 0; j <= nums.length; j++) {
        total += j;
    }

    return total - actualTotal;
};


// optimize
var missingNumber = function(nums) {
    var total = 0;

    for (var i = 0; i < nums.length; i++) {
        total += i - nums[i];
    }
    return total + i;
}

// xor version 不同时为1，相同时为0，与0异或结果不变
// 利用 a ^ b ^ b = a 的性质
var missingNumber = function(nums) {
    var xor = 0;

    for (var i = 0; i < nums.length; i++) {
        xor = xor ^ i ^ nums[i];
    }
    return xor ^ i;
}
