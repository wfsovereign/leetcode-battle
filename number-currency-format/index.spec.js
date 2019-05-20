
const { expect } = require('chai')

const { currencyFormatReg, currencyFormat } = require('./index')


describe('common method', function () {

  it('should output 1,234 when input 1234', function () {
    expect(currencyFormatReg(1234)).to.equal('1,234')
    expect(currencyFormat(1234)).to.equal('1,234')
  })

  it('should output 234 when input 234', function () {
    expect(currencyFormatReg(234)).to.equal('234')
    expect(currencyFormat(234)).to.equal('234')
  })


})
