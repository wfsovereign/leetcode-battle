/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

  const length = strs.length
  let result = ''
  const firstItem = strs.slice(0, 1)[0]
  if (!firstItem) {
    return result
  }
  const firstItemLength = firstItem.length
  strs = strs.slice(1, strs.length)
  for (let i = 0; i < firstItemLength; i++) {
    let j = 0
    let mark = true
    while (j < length -1) {
      if (firstItem[i] !== strs[j][i]) {
        mark = false
        break
      }
      j++
    }
    if (mark) {
      result += firstItem[i]
    } else {
      return result
    }
  }
  return result
}


module.exports = {
  longestCommonPrefix,
}
