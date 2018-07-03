/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var maxNum = Math.pow(2, 31);
    if (-9 < x && x < 9) return x;
    var isNegative = x < 0;
    x = parseInt(x);
    var reverseNum = parseInt(x.toString().split('').reverse().join(''));
    if (reverseNum > maxNum) return 0;
    return parseInt((isNegative ? '-' : '') + '' + reverseNum);
};

var num = 123;
var res = reverse(num);
console.log('result :', res);
