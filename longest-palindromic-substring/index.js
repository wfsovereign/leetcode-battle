const longestPalindrome = function (s) {
  if (!s || s.toString().length <= 1) {
    return s
  }
  const length = s.length

  let startIndex = 0, endIndex = 1

  for (let i = 0; i < length;) {
    let j = i, k = i
    while (k < length - 1 && s[k] === s[k + 1]) {
      ++k
    }

    i = k + 1

    while (k < length - 1 && j > 0 && s[k + 1] === s[j - 1]) {
      ++k
      --j
    }

    if ((k - j + 1) > endIndex) {
      startIndex = j
      endIndex = k - j + 1
    }
  }

  return s.substr(startIndex, endIndex)
}


module.exports = {
  longestPalindrome
}
