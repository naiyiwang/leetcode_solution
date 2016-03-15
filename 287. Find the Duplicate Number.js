/**
 * @param {number[]} nums
 * @return {number}
 */
 // 如果数组中只存在一种重复数字，那么按数组值的索引顺序去遍历数组，得到的数字序列在某种形式上可以看成一个圆环
 //
 //     x_0 -> x_1 -> ... x_k -> x_{k+1} ... -> x_{k+j}
 //                        ^                       |
 //                        |                       |
 //                        +-----------------------+
 //
 // http://keithschwarz.com/interesting/code/?dir=find-duplicate
 // 然后，解题思路同142题
 // 第一次相遇在圆中一点，第二次相遇在圆的起点
var findDuplicate = function(nums) {
    var slow = nums[0];
    var fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while(slow != fast);

    slow = nums[0];

    while(slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
};
