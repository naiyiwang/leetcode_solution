/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function(root, k) {
    var count = 0;
    var result;

    function foreachTree(root) {
        if (root.left) foreachTree(root.left);

        count++;
        if (count === k) {
            result = root.val;
            return;
        }

        if (root.right) foreachTree(root.right);
    }

    if (root) {
        foreachTree(root);
    }
    return result;
};

var root = {
    val: 1,
    left: {
        val: 0.1,
        left: null,
        right: null
    },
    right: {
        val: 2,
        left: null,
        right: null
    }
};

kthSmallest(root, 1);
