/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (!root) {
        return []
    }
    var result = []
    traverse(root.left, result)
    result.push(root.val)
    traverse(root.right, result)

    return result
};

var traverse = function (node, result) {
    if (!node) {
        return result
    }
    traverse(node.left, result)
    result.push(node.val)
    traverse(node.right, result)
}

var data = "{\"val\":1,\"right\":{\"val\":2,\"right\":null,\"left\":{\"val\":3,\"right\":null,\"left\":null}},\"left\":null}"

inorderTraversal(data)