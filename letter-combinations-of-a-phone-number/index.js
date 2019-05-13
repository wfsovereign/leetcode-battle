/*
*
* Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*
* Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
* */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return []
  const digitsMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }
  if (digits.length === 1) {
    return [...digitsMap[digits].split('')]
  }
  const result = [...digitsMap[digits[0]].split('')]
  const letterArray = digits.split('').map(digit => digitsMap[digit])

  return getChart(result, letterArray, 1)

  function getChart(atom, list, index) {
    const newAtom = []
    atom.forEach(a => {
      for (let i of list[index]) {
        newAtom.push(a + i)
      }
    })
    if (index + 1 <= list.length - 1) {
      return getChart(newAtom, list, index + 1)
    }
    return newAtom
  }
}


module.exports = {
  letterCombinations,
}
