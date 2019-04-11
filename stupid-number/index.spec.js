const { expect } = require('chai')
const { nthNumber } = require('./index')

describe('Alibaba: stupid number', function () {
  this.timeout(60 * 1000)

  it('should output 10 when input 9', function () {
    expect(nthNumber(9)).to.equal(10)
  })

  it('should output 1356 when input 100', function () {
    expect(nthNumber(100)).to.equal(1536)
  })

  it('should output 12754584 when input 800', function () {
    expect(nthNumber(800)).to.equal(12754584)
  })

  it('should output 26244000 when input 900', function () {
    expect(nthNumber(900)).to.equal(26244000)
  })

  xit('should output 51200000 when input 1000', function () {
    expect(nthNumber(1000)).to.equal(51200000)
  })

})
