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

var letterCombinations1 = function(digits) {
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
  let result = []

  function combination(letter, digits) {
    if (digits.length < 1) {
      return result.push(letter)
    }

    const currentLetters = digitsMap[digits[0]]
    const nextDigits = digits.substr(1)
    for (let i = 0; i < currentLetters.length; i++) {
      combination(letter + currentLetters[i], nextDigits)
    }
    return result
  }

  return combination('', digits, result)
}

var letterCombinations2 = function(digits) {
  if (!digits) return []
  const digitsMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }
  if (digits.length === 1) {
    return digitsMap[digits]
  }
  const letters = digits.split('').reduce((pre, cur) => {
    pre.push(digitsMap[cur])
    return pre
  }, [])

  return mergeArr(letters)

  function mergeArr(array) {
    if (array.length === 1) return array[0]
    const midIndex = Math.floor(array.length / 2)
    const left = array.slice(0, midIndex)
    const right = array.slice(midIndex)
    return combineArr(mergeArr(left), mergeArr(right))
  }

  function combineArr(arr1, arr2) {
    const result = []
    for (let i of arr1) {
      for (let j of arr2) {
        result.push(i + j)
      }
    }
    return result
  }
}

module.exports = {
  letterCombinations: letterCombinations2,
}
