const { expect } = require('chai')

const { fibonacci } = require('./index')


describe('Code War: memoized fibonacci ', function() {
  this.timeout(6 * 1000)

  it('should output 12586269025 when input 50', function() {
    expect(fibonacci(50)).to.equal(12586269025)
  })

  it('should output 190392490709135 when input 70', function() {
    expect(fibonacci(70)).to.equal(190392490709135)
  })

})
