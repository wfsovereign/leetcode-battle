/*
* 评测题目: Stupid numbers are positive numbers whose prime factors only include 2, 3, 5,
1 is first stupid number, please find the n-th number.

Example:
Input: n = 9
Output: 10
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10... stupid numbers.
*
* */

const factors = [2, 3, 5]
const isStupidNumber = (value) => {
  let result = value
  factors.forEach(item => {
    do {
      result = result / item
    } while (result.toString().indexOf('.') === -1)

    result = result * item
  })

  return result === 1
}

/*
*
* const stupidNumberArray = [1, 2, 3, 4, 5]
  if (n < stupidNumberArray.length) {
    return stupidNumberArray[n - 1]
  }
  let i = 5, currentNumber = 6
  while (n > i) {
    // console.log('currentNumber  ', currentNumber)
    if (isStupidNumber(currentNumber)) {
      // console.log('+++')
      i++
    }
    currentNumber++
  }

  return currentNumber - 1*/

//8:35
var nthNumber = function(n) {
  const stupidNumberArray = [1, 2, 3, 4, 5]
  if (n < stupidNumberArray.length) {
    return stupidNumberArray[n - 1]
  }
  let i = 6
  while (n > stupidNumberArray.length) {
    if (isStupidNumber(i)) {
      stupidNumberArray.push(i)
    }
    i++
  }

  return stupidNumberArray[stupidNumberArray.length -1]
};

console.log('----- >', nthNumber(9))
console.log('----- >', nthNumber(11))
console.log('----- >', nthNumber(14))
console.log('----- >', nthNumber(100))
