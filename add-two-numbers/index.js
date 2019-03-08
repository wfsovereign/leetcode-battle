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

function getListNodeValue (l) {
    let result = ''
    if (l.next !== null && l.next !== undefined) {
       result += getListNodeValue(l.next)
    }
    result += l.val
    return result
}

function generateListNode (array) {
    const length = array.length
    return {
        val: array[0],
        next: length > 1 ? generateListNode(array.slice(1, length)) : null
    }
}

function addWithString (s1, s2) {
  const a1 = s1.split('')
  const a2 = s2.split('')
  const length = a1.length > a2.length ? a1.length : a2.length
  const result = []
  let remainder = 0
  for(let i =0; i < length; i++) {
    let items = ((parseInt(a1[i]) || 0) + (parseInt(a2[i]) || 0))
    let sum = items + remainder

    result.push(sum % 10)
    remainder = sum >= 10 ? 1 : 0
  }
  return result
}

var addTwoNumbers = function (l1, l2) {
    return generateListNode(addWithString(getListNodeValue(l1),  getListNodeValue(l2)).map(item => parseInt(item)))
}

let l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3
        }
    }
}, l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4
        }
    }
}

console.log('res :', addTwoNumbers(l1, l2))

let l3 = generateListNode([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
let l4 = {"val":1,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":1,"next":null}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
// console.log('l3, ', JSON.stringify(l3))
// console.log(getListNodeValue(l3))
console.log('---------------')
console.log('2, ', JSON.stringify(addTwoNumbers(l3, generateListNode([5, 6, 4]))))
