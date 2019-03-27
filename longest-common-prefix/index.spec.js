const { expect } = require('chai')
const { longestCommonPrefix } = require('./index')

describe('LeetCode: longest common prefix', function () {


  it('should output fl when input ["flower","flow","flight"]', function () {
    expect(longestCommonPrefix(["flower","flow","flight"])).to.equal('fl')
  })

  it('should output "" when input ["dog","racecar","car"]', function () {
    expect(longestCommonPrefix(["dog","racecar","car"])).to.equal('')
  })


})
