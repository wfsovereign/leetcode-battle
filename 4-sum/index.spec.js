const { expect } = require('chai')

const { fourSum } = require('./index')


describe('LeetCode 3 sum closet', function() {


  it('should output [[-1,  0, 0, 1] [-2, -1, 1, 2] [-2,  0, 0, 2]] when input [1, 0, -1, 0, -2, 2] and 0', function() {
    expect(fourSum([1, 0, -1, 0, -2, 2], 0)).to.have.deep.members([
      [-1, 0, 0, 1],
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
    ])
  })

  it('should output [[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]] when input [-3,-2,-1,0,0,1,2,3] and 0', function() {
    expect(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0)).to
      .have
      .deep.members([[-3, -2, 2, 3], [-3, -1, 1, 3], [-3, 0, 0, 3], [-3, 0, 1, 2], [-2, -1, 0, 3], [-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]])
  })

  it('should output [[-3,-1,0,4]] when input [-3,-1,0,2,4,5] and 0', function() {
    expect(fourSum(
      [-3, -1, 0, 2, 4, 5], 0)).to
      .have
      .deep.members([[-3, -1, 0, 4]])
  })

})


