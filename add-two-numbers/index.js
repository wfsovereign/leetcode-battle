/*

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
* */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = val
    this.next = next
}

var addTwoNumbers = function (l1, l2) {
    if (!Array.isArray(l1) || !Array.isArray(l2)) {
        return
    }
    var array1 = l1.reverse()
    var array2 = l2.reverse()

    if (array1.length < array2.length) {
        var box = new Array(...array1)
        array1 = array2
        array2 = box
    }

    const length = array1.length
    const result = []
    var effluence = 0
    for (var i = 0; i < length; i++) {
        const sum = array1[i] + array2[i] + effluence
        result.push(sum % 10)
        effluence = parseInt(sum / 10)
    }
    console.log('---> ', result)
    return result
};

console.log('res :', addTwoNumbers([2, 4, 3], [5, 6, 4]))