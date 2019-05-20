const { expect } = require('chai')

const { lastDigit } = require('./index')


describe('Code War: last digit of a large number', function () {

  it('should output 9 when input 9, 7', function () {
    expect(lastDigit('9', '7')).to.equal(9)
  })

  it('should output 1 when input 9, 0', function () {
    expect(lastDigit('9', '0')).to.equal(1)
  })

  it('should output 1 when input 3, 14', function () {
    expect(lastDigit('3', '14')).to.equal(9)
  })

  it('should output 1 when input 3, 15', function () {
    expect(lastDigit('3', '15')).to.equal(7)
  })
  it('should output 1 when input 3, 16', function () {
    expect(lastDigit('3', '16')).to.equal(1)
  })
  it('should output 1 when input 3, 17', function () {
    expect(lastDigit('3', '17')).to.equal(3)
  })

  it('should output 1 when input 13, 10', function () {
    expect(lastDigit('13', '10')).to.equal(9)
  })
  it('should output 1 when input 13, 11', function () {
    expect(lastDigit('13', '11')).to.equal(7)
  })
  it('should output 1 when input 13, 12', function () {
    expect(lastDigit('13', '12')).to.equal(1)
  })
  it('should output 1 when input 13, 13', function () {
    expect(lastDigit('13', '13')).to.equal(3)
  })

  it('should output 0 when input 10, 10000000000', function () {
    expect(lastDigit('10', '10000000000')).to.equal(0)
  })

  it('should output 6 when input 1606938044258990275541962092341162602522202993782792835301376, 2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376', function () {
    expect(lastDigit('1606938044258990275541962092341162602522202993782792835301376', '2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376')).to.equal(6)
  })

  it('should output 7 when input 3715290469715693021198967285016729344580685479654510946723, 68819615221552997273737174557165657483427362207517952651', function () {
    expect(lastDigit('3715290469715693021198967285016729344580685479654510946723', '68819615221552997273737174557165657483427362207517952651')).to.equal(7)
  })


})


