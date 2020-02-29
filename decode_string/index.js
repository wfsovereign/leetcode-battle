/*
https://leetcode.com/problems/decode-string/
* Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
* */


/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const length = s.length
  const stack = []
  const bracketStack = []

  let curNum = 0
  let curChars = ''
  let curStack = []

  for (let i = 0; i < length; i++) {
    if (s[i] === '[') {
      bracketStack.push(1)
      if (curNum) curStack.push(curNum)
      curNum = 0
      continue
    }
    if (s[i] === ']') {
      bracketStack.pop()
      if (bracketStack.length === 0) {
        curStack.push(curChars)
        stack.push(curStack)
        curStack = []
      } else {
        let theLastChar = curStack[curStack.length - 1]
        if (typeof theLastChar === 'number') {
          curStack[curStack.length - 1] = curChars.repeat(theLastChar)
        } else {
          curStack[curStack.length - 1] = theLastChar + curChars
        }
        curNum = 0
      }

      curChars = ''
      continue
    }

    const currentIntParse = parseInt(s[i])

    if (isNaN(currentIntParse)) {
      if (bracketStack.length === 0) {
        stack.push(s[i])
      } else {
        curChars += s[i]
      }
      continue
    }

    if (bracketStack.length === 0) {
      curNum = parseInt('' + curNum + s[i])
    } else {
      if (curChars.length > 0) {
          if (curNum) curStack.push(curNum)
          curStack.push(curChars)

          curNum = currentIntParse
          curChars = ''
          continue
      }
      curNum = parseInt('' + curNum + s[i])
      continue
    }
    if (i === (length - 1) && curStack.length > 0) {
      stack.push(curStack)
    }
  }

  return stack.map((item) => {
    if (typeof item === 'string') {
      return item
    }

    const itemLength = item.length
    let c = ''
    for (let j = itemLength - 1; j >= 0; j--) {
      if (typeof item[j] === 'string') {
        c = (item[j] + c)
      } else {
        c = c.repeat(item[j] || 1)
      }
    }
    return c
  }).join('')
}
/*
* Runtime: 56 ms, faster than 53.68% of JavaScript online submissions for Decode String.
Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Decode String.
* */


module.exports = {
  decodeString,
}
