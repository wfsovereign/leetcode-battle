

/*
*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid
* */


/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  if (s === '') {
    return true
  }

  var length = s.length
  if ((s.length % 2) !== 0) {
    return false
  }

  var m = {
    '(': ')',
    ')': '(',
    '[': ']',
    ']': '[',
    '{': '}',
    '}': '{'
  }
  var original = s.split('')

  var stack = [original[0]]
  for (let i = 1; i < length; i++) {
    if (m[original[i]] === stack[0]) {
      stack.shift()
    } else {
      stack.unshift(original[i])
    }
  }

  return stack.length === 0
};

/*
* Runtime: 60 ms, faster than 49.08% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 33.9 MB, less than 70.00% of JavaScript online submissions for Valid Parentheses.
* */


module.exports = {
  isValid
}
