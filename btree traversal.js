/*
    btre:

        1
       / \
      2   7
     / \
    3   4
       / \
      5   6

    先序：1, 2, 3, 4, 5, 6, 7
    中序：3, 2, 5, 4, 6, 1, 7
    后序：3, 5, 6, 4, 2, 7, 1
*/

var btree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: {
                val: 5,
                left: null,
                right: null
            },
            right: {
                val: 6,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 7,
        left: null,
        right: null
    }
};

// 递归先序
var preOrderRecursion = function(node) {
    if (!node) return;

    console.log(node.val);
    preOrderRecursion(node.left);
    preOrderRecursion(node.right);
};
console.log('先序：\n');
preOrderRecursion(btree);
// 递归中序
var inOrderRecursion = function(node) {
    if (!node) return;

    inOrderRecursion(node.left);
    console.log(node.val);
    inOrderRecursion(node.right);
};
console.log('中序：\n');
inOrderRecursion(btree);
// 递归后序
var postOrderRecursion = function(node) {
    if (!node) return;

    postOrderRecursion(node.left);
    postOrderRecursion(node.right);
    console.log(node.val);
};
console.log('后序：\n');
postOrderRecursion(btree);




// 非递归先序
var preOrderIteration = function(node) {
    var stack = [];

    while (node || stack.length) {
        while (node) {
            console.log(node.val);
            stack.push(node);
            node = node.left;
        }

        if (stack.length) {
            node = stack.pop();
            node = node.right;
        }
    }
};
console.log('非递归先序：');
preOrderIteration(btree);

// 非递归中序
var inOrderIteration = function(node) {
    var stack = [];

    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }

        if (stack.length) {
            node = stack.pop();
            console.log(node.val);
            node = node.right;
        }
    }
};
console.log('非递归中序：');
inOrderIteration(btree);

// 非递归后序
var postOrderIteration = function(node) {
    var stack = [];

    // 第一个while用于遍历
    while (node || stack.length) {
        while (node) {
            node.isFirstVisit = true;
            stack.push(node);
            node = node.left;
        }

        if (stack.length) {
            node = stack.pop();
            // 第二次访问时才输出值
            if (node.isFirstVisit) {
                node.isFirstVisit = false;
                stack.push(node);
                node = node.right;
            } else {
                console.log(node.val);
                node = null;
            }
        }
    }
};
console.log('非递归后序：');
postOrderIteration(btree);

// 非递归后序，解法2
// node值的输出条件：左右节点都不存在，或者存在的左右节点都被访问过
var postOrderIteration2 = function(node) {
    var stack = [];
    var pre;
    stack.push(node);

    while(stack.length) {
        node = stack[stack.length - 1];

        if ((!node.left && !node.right) ||
                (pre && (pre == node.right || pre == node.left))) {
            console.log(node.val);
            pre = node;
            stack.pop();
        } else {
            node.right && stack.push(node.right);
            node.left && stack.push(node.left);
        }
    }

};
console.log('非递归后序2：');
postOrderIteration2(btree);

