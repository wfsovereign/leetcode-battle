
var lastDigit = function(str1, str2) {
  if (str2.length === 1 && parseInt(str2) === 0) {
    return 1
  }
  const lastDigitOfTarget = parseInt(str1.substr(str1.length - 1))

  let lastDigitOfExponent = parseInt(str2.substr(str2.length - 1))
  if (str2.length > 1) {
    lastDigitOfExponent = 10 + lastDigitOfExponent
  }

  const res = (lastDigitOfTarget * Math.pow(lastDigitOfTarget, lastDigitOfExponent - 1 >= 0 ? lastDigitOfExponent - 1 : 0)).toString()
  return parseInt(res.substr(res.length - 1))
}


module.exports = {
  lastDigit,
}
