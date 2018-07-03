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
var postorderTraversal = function(root) {
    if (!root) {
        return []
    }
    var result = []
    traverse(root.left, result)
    traverse(root.right, result)
    result.push(root.val)

    return result
};

var traverse = function (node, result) {
    if (!node) {
        return result
    }

    traverse(node.left, result)
    traverse(node.right, result)
    result.push(node.val)
}


var data = {"val":1,"right":{"val":2,"right":null,"left":{"val":3,"right":null,"left":null}},"left":null}

var result = postorderTraversal(data)

console.log('result ', result);