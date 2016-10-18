/**
Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var res = [],
        roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
        nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var digit = 0;
    while (num > 0) {
      var  times = Math.floor(num / nums[digit]);
      num -= nums[digit] * times;
      for (; times > 0; times--) {
          res.push(roman[digit]);
      }
      digit++;
    }
    return res.join('');
};



var testData = 118;
console.log('result: ', intToRoman(testData));
