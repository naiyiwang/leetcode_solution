/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 *      a
 *    1   2
 *    * * * * * *
 *         *     *  b
 *      c  *     *
 *          * * *
 *          3
 */
// 几个关键点：1. 起点 2. 环的起点 3. 两个指针p1, p2，一个一次移一位，一个一次移两位，如果有环，必定会在环中一点相遇
// (进环后，p1相当于相对静止，p2每次移动1位)。 p1移动的距离 2 * (a + b) = a + b + + c + b
// 得到 a = c。 所以第一次相遇后，把p1指回起点，然后p1p2每次移动一位，相遇的点就是环的起点。
var detectCycle = function(head) {
    var p1;
    var p2;
    p1 = p2 = head;

    do {
        if (!p2) return null;

        p1 = p1.next;
        p2 = p2.next;

        if (p2) {
            p2 = p2.next;
        } else {
            return null;
        }
    } while (p1 != p2);

    p1 = head;

    while(p1 != p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;

};
