/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x.toString().length <= 1)  return true;
  var x2Str = x.toString();
  var length = x2Str.length;
  var mark = true;
  for (var i = 0; i < length; i++) {
    if (i > Math.floor(length / 2)) break;
    if (x2Str[i] !== x2Str[length - i - 1]) {
      mark = false;
      break;
    }
  }
  console.log('i : %s', i);
  return mark;
};

var testData = 1234554321;
var result = isPalindrome(testData);
console.log('result :', result);
