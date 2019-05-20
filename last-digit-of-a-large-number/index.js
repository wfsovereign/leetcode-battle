var lastDigit = function(str1, str2) {
  return +!+str2 || Math.pow(str1.slice(-1) % 10, str2.slice(-2) % 4 || 4) % 10
}



/*
*
* const prd = {
  '2': {
    period: 4,
    sequence: [2,4,8,6]
  },
  '3': {
    period: 4,
    sequence: [3,9,7,1]
  },
  '4': {
    period: 2,
    sequence: [4,6]
  },
  '7': {
    period: 4,
    sequence: [7,9,3,1]
  },
  '8': {
    period: 4,
    sequence: [8,4,2,6]
  },
  '9': {
    period: 2,
    sequence: [9,1]
  }
};
* find the 0-9 regular, all the number exponent regular number is 4
* */
var lastDigit2 = function(str1, str2) {
  let key = [0,0,0,0, 1,1,1,1, 6,2,4,8, 1,3,9,7, 6,4,6,4, 5,5,5,5, 6,6,6,6, 1,7,9,3, 6,8,4,2, 1,9,1,9]
  let i = +str1.slice(-1)
  let j = str2.slice(-2) % 4
  if (str2 === '0') return 1
  return key[4 * i + j]
}

module.exports = {
  lastDigit,
}
