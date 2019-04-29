const { expect } = require('chai')

const { threeSumClosest } = require('./index')


describe('LeetCode 3 sum closet', function () {


  it('should output 2 when input [-1, 2, 1, -4] and 1', function () {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).to.equal(2)
  })

  it('should output 2 when input [-1,0,1,1,55] and 3', function () {
    expect(threeSumClosest([-1, 0, 1, 1, 55], 3)).to.equal(2)
  })

  it('should output 3 when input [1,1,1,0] and 100', function () {
    expect(threeSumClosest([1,1,1,0], 100)).to.equal(3)
  })


  it('should output 82 when input [1,2,4,8,16,32,64,128] and 82', function () {
    expect(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82)).to.equal(82)
  })

})


