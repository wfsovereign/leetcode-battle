/**
 * @param {string} str
 * @return {number}
 */
var maxNum = Math.pow(2, 31) - 1;
var minNum = max * -1;
var myAtoi = function(str) {
    str = str.trim();
    var legalCharacters = [],
        length = str.length;
    for (var i = 0; i < length; i++) {
        if (isNaN(str[i]) && (str[i] !== '-' && str[i] !== '.' && str[i] !== '+')) break;
        if (i === 0 && (str[i] === '-' || str[i] === '+')) legalCharacters.push(str[i]);
        if (i !== 0 && (str[i] === '-' || str[i] === '+')) break;
        if (!isNaN(str[i])) legalCharacters.push(str[i]);
        if (str[i] === '.' && legalCharacters.indexOf('.') > -1) break;
        if (str[i] === '.' && legalCharacters.indexOf('.') === -1) legalCharacters.push(str[i]);
    }
    var res = legalCharacters.join('');
    if (res.length === 0) return 0;
    res = parseInt(res);
    if (isNaN(res)) return 0;
    if (res > maxNum) return maxNum;
    if (res < minNum) return minNum;
    return res;
};

var testData = '+1';
var res = myAtoi(testData);
console.log('result ------> ', res);
