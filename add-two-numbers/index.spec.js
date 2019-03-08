const { addTwoNumbers, generateListNode } = require('./index')
const { expect } = require('chai')

describe('LeetCode add two number', () => {
  it('should output <ListNode>[7, 0, 8] when input <ListNode>[2, 4, 3] and <ListNode>[5, 6, 4]', function () {
    let l1 = {
      val: 2,
      next: {
        val: 4,
        next: {
          val: 3,
        },
      },
    }, l2 = {
      val: 5,
      next: {
        val: 6,
        next: {
          val: 4,
        },
      },
    }

    expect(addTwoNumbers(l1, l2)).to.deep.equal(generateListNode([7, 0, 8]))
  })

  it('should output <ListNode>[0, 1] when input <ListNode>[5] and <ListNode>[5]', function () {
    expect(addTwoNumbers(generateListNode([5]), generateListNode([5]))).to.deep.equal(generateListNode([0, 1]))
  })

  it(`should output <ListNode>[6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] when input
 <ListNode>[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] and <ListNode>[5, 6, 4]`, function () {
    expect(addTwoNumbers(generateListNode([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]),
      generateListNode([5, 6, 4])))
      .to.deep.equal(generateListNode([6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]))
  })
})
