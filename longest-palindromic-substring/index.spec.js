const { longestPalindrome } = require('./index')
const { expect } = require('chai')

describe('longest palindromic substring ', () => {
  it('should output bab when input babad', function () {
    expect(longestPalindrome('babad')).to.equal('bab')
  })

  it('should output aaaaaaxabaxaaaaaa when input aaaaaaxabaxaaaaaa', function () {
    expect(longestPalindrome('aaaaaaxabaxaaaaaa')).to.equal('aaaaaaxabaxaaaaaa')
  })

  it('should output bb when input cbbd', function () {
    expect(longestPalindrome('cbbd')).to.equal('bb')
  })
})
