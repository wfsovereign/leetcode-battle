
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const ROMAN_MAP = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  return s.split('').map(i => ROMAN_MAP[i]).reduce((pre, cur, index, it) => {
    if ((index + 1) < it.length && cur < it[index + 1]) {
      return pre - cur
    }
    return pre + cur
  }, 0)
}

/*
Runtime: 168 ms, faster than 79.08% of JavaScript online submissions for Roman to Integer.
Memory Usage: 40 MB, less than 52.12% of JavaScript online submissions for Roman to Integer.
*/


module.exports = {
  romanToInt
}
