/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return []
    }
    
    var levelIndex = 1
    var result = []
    traverse(root, result, levelIndex)
    
    return result 
};

var traverse = function (node, result, levelIndex) {
    if (!node) {
        return result
    }

    if (result.length < levelIndex) {
        result.push([])
    }
    
    var currentLevel = result[levelIndex - 1]
    
    currentLevel.push(node.val)
    
    traverse(node.left, result, levelIndex + 1)
    traverse(node.right, result, levelIndex + 1)
}

var data = {"val":3,"right":{"val":20,"right":{"val":7,"right":null,"left":null},"left":{"val":15,"right":null,"left":null}},"left":{"val":9,"right":null,"left":null}}

levelOrder(data)