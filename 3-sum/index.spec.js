const { expect } = require('chai')

const { threeSum } = require('./index')


describe('LeetCode 3 sum', function () {

  it('should output [\n' +
    '  [-1, 0, 1],\n' +
    '  [-1, -1, 2]\n' +
    '] when input [-1, 0, 1, 2, -1, -4]', function () {


    expect(threeSum([-1, 0, 1, 2, -1, -4]).length).to.equal([
      [-1, 0, 1],
      [-1, -1, 2],
    ].length)
    expect(threeSum([-1, 0, 1, 2, -1, -4])).to.have.deep.members([
      [-1, 0, 1],
      [-1, -1, 2],
    ])
  })

  it('should output [0,0,0] when input [0,0,0]', function () {
    expect(threeSum([0, 0, 0])).to.have.deep.members([[0, 0, 0]])
  })

  it('should output [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]] when input [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]', function () {
    expect(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]))
      .to.have.deep.members([[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]])
  })

  it('should output [[-5,1,4],[-4,0,4],[-4,1,3],[-2,-2,4],[-2,1,1],[0,0,0]] when input [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]', function () {
    expect(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]))
      .to.have.deep.members([[-5, 1, 4], [-4, 0, 4], [-4, 1, 3], [-2, -2, 4], [-2, 1, 1], [0, 0, 0]])
  })


})


