const { expect } = require('chai')

const { twoSum, twoSum2 } = require('./index')


describe('LeetCode two sum', function () {
  it('should output [0, 1] when input [2, 7, 11, 15] and 9', function () {
    expect(twoSum([2, 7, 11, 15], 9)).to.eql([0, 1])
    expect(twoSum2([2, 7, 11, 15], 9)).to.eql([0, 1])
  })

  it('should output [0, 3] when input [3, 4, 5, 7, 9, 10] and 10', function () {
    expect(twoSum([3, 4, 5, 7, 9, 10], 10)).to.eql([0, 3])
    expect(twoSum2([3, 4, 5, 7, 9, 10], 10)).to.eql([0, 3])
  })

  it('should output [0, 1] when input [3, 3] and 6', function () {
    expect(twoSum([3, 3], 6)).to.eql([0, 1])
    expect(twoSum2([3, 3], 6)).to.eql([0, 1])
  })


})
