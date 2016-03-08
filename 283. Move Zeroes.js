/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var i = 0;
    var len = nums.length;
    var count = 0;

    while(count++ < len) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        } else {
            i++;
        }
    }
};

moveZeroes([0,1,0,3,12]);

var moveZeroes = function(nums) {
    var i = 0;
    var len = nums.length;

    nums.forEach(function(num) {
        if (num != 0) nums[i++] = num;
    });

    while (i < len) {
        nums[i++] = 0;
    }
};
