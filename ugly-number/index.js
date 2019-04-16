/*
*
* 评测题目: Stupid numbers are positive numbers whose prime factors only include 2, 3, 5,
1 is first stupid number, please find the n-th number.

Example:
Input: n = 9
Output: 10
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10... stupid numbers.
*
* */

var nthNumber = function (n) {
  const stupidNumberArray = [1]
  let mul2 = 0, mul3 = 0, mul5 = 0
  for (let i = 1; i < n; i++) {
    stupidNumberArray[i] = Math.min(stupidNumberArray[mul2] * 2, stupidNumberArray[mul3] * 3, stupidNumberArray[mul5] * 5)

    while (stupidNumberArray[mul2] * 2 === stupidNumberArray[i])
      mul2++
    while (stupidNumberArray[mul3] * 3 === stupidNumberArray[i])
      mul3++
    while (stupidNumberArray[mul5] * 5 === stupidNumberArray[i])
      mul5++
  }
  return stupidNumberArray[n - 1]
}

/*
* Initial array for put the ugly number, use pointer the multiple number of prime factors to calculate next number,
* which is the minimal number the result of every prime factor multiply the pointer value,
* then make pointer increase 1 which value in the array with index is pointer value multiply relative factor is equal current minimal value.
* */

module.exports = {
  nthNumber,
}
