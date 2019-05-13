const { expect } = require('chai')

const { letterCombinations } = require('./index')


describe('LeetCode: letter combinations of a phone number', function() {

  it('should output "2,3" when input ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]', function() {
    expect(letterCombinations('23')).to.have.deep.members(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
  })

  it('should output [] when input ""', function() {
    expect(letterCombinations('')).to.have.deep.members([])
  })

  it('should output ["a","b","c"] when input 2', function() {
    expect(letterCombinations('2')).to.have.deep.members(['a', 'b', 'c'])
  })

  it('should output ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"] when input "234"', function() {
    expect(letterCombinations('234'))
      .to.have.deep.members(['adg', 'adh', 'adi', 'aeg', 'aeh', 'aei', 'afg', 'afh', 'afi', 'bdg', 'bdh', 'bdi', 'beg', 'beh', 'bei', 'bfg', 'bfh', 'bfi', 'cdg', 'cdh', 'cdi', 'ceg', 'ceh', 'cei', 'cfg', 'cfh', 'cfi'])
  })
})

