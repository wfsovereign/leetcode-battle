const { expect } = require('chai')
const { romanToInt } = require('./index')

describe('LeetCode Roman to integer', () => {


  it('should out 3 when input III', function () {
    expect(romanToInt('III')).to.equal(3)
  })

  it('should out 4 when input IV', function () {
    expect(romanToInt('IV')).to.equal(4)
  })

  it('should out 9 when input IX', function () {
    expect(romanToInt('IX')).to.equal(9)
  })

  it('should out 58 when input LVIII', function () {
    expect(romanToInt('LVIII')).to.equal(58)
  })

  it('should out 1994 when input MCMXCIV', function () {
    expect(romanToInt('MCMXCIV')).to.equal(1994)
  })
})
