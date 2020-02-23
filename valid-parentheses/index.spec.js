
const { expect } = require('chai')

const { isValid } = require('./index')


describe('valid parentheses', function () {

  it('should output true when input ()', function () {
    expect(isValid('()')).to.equal(true)
  })

  it('should output true when input ()[]{}', function () {
    expect(isValid('()[]{}')).to.equal(true)
  })

  it('should output true when input {[]}', function () {
    expect(isValid('{[]}')).to.equal(true)
  })

  it('should output true when input "(([]){})"', function () {
    expect(isValid('(([]){})')).to.equal(true)
  })
})
