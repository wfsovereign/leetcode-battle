
const { expect } = require('chai')

const { isValid, isValid2 } = require('./index')


describe('valid parentheses', function () {

  it('should output true when input ()', function () {
    expect(isValid('()')).to.equal(true)
    expect(isValid2('()')).to.equal(true)
  })

  it('should output true when input ()[]{}', function () {
    expect(isValid('()[]{}')).to.equal(true)
    expect(isValid2('()[]{}')).to.equal(true)
  })

  it('should output true when input {[]}', function () {
    expect(isValid('{[]}')).to.equal(true)
    expect(isValid2('{[]}')).to.equal(true)
  })

  it('should output true when input "(([]){})"', function () {
    expect(isValid('(([]){})')).to.equal(true)
    expect(isValid2('(([]){})')).to.equal(true)
  })
})
