const { expect } = require('chai')
const { decodeString, decodeString1 } = require('./index')


describe('valid parentheses', function () {

  it('should output aaabcbc when input 3[a]2[bc]', function () {
    expect(decodeString('3[a]2[bc]')).to.equal('aaabcbc')
    expect(decodeString1('3[a]2[bc]')).to.equal('aaabcbc')
  })

  it('should output accaccacc when input 3[a2[c]]', function () {
    expect(decodeString('3[a2[c]]')).to.equal('accaccacc')
    expect(decodeString1('3[a2[c]]')).to.equal('accaccacc')
  })

  it('should output abcabccdcdcdef when input 2[abc]3[cd]ef', function () {
    expect(decodeString('2[abc]3[cd]ef')).to.equal('abcabccdcdcdef')
    expect(decodeString1('2[abc]3[cd]ef')).to.equal('abcabccdcdcdef')
  })

  it('should output "leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode" when input "100[leetcode]"', function () {
    expect(decodeString('100[leetcode]')).to.equal('leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode')
    expect(decodeString1('100[leetcode]')).to.equal('leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode')
  })

  it('should output "aaabFFFFcbFFFFc" when input ""3[a]2[b4[F]c]""', function () {
    expect(decodeString('3[a]2[b4[F]c]')).to.equal('aaabFFFFcbFFFFc')
    expect(decodeString1('3[a]2[b4[F]c]')).to.equal('aaabFFFFcbFFFFc')
  })

  it('should output abcbcbcbcbcbcbcbcbcbcabcbcbcbcbcbcbcbcbcbcabcbcbcbcbcbcbcbcbcbc when input 3[a10[bc]]', function () {
    expect(decodeString('3[a10[bc]]')).to.equal('abcbcbcbcbcbcbcbcbcbcabcbcbcbcbcbcbcbcbcbcabcbcbcbcbcbcbcbcbcbc')
    expect(decodeString1('3[a10[bc]]')).to.equal('abcbcbcbcbcbcbcbcbcbcabcbcbcbcbcbcbcbcbcbcabcbcbcbcbcbcbcbcbcbc')
  })

  it('should output zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef when input 3[z]2[2[y]pq4[2[jk]e1[f]]]ef', function () {
    expect(decodeString('3[z]2[2[y]pq4[2[jk]e1[f]]]ef')).to.equal('zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef')
    expect(decodeString1('3[z]2[2[y]pq4[2[jk]e1[f]]]ef')).to.equal('zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef')
  })


})
