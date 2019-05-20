const currencyFormatReg = function(val) {
  return val.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}

const currencyFormat = function(val) {
  const target = val.toString()
  if (target.length < 4) {
    return target
  }
  return target.split('').reverse().map((item, index) => index > 0 && (index % 3 === 0) ? item + ',' : item).reverse().join('')
}

module.exports = {
  currencyFormatReg,
  currencyFormat,
}
