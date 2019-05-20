const currencyFormatReg = function(val) {
  return val.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}

const currencyFormat = function(val) {
  const target = val.toString()
  if (target.length < 4) {
    return target
  }
  return target.split('').reverse().reduce((pre, cur, index) => {
    if (index === 0 || (index % 3 === 0)) {
      pre.push(cur.toString())
    } else {
      pre[(pre.length || 1) - 1] = cur + pre[(pre.length || 1) - 1]
    }
    return pre
  }, []).reverse().join(',')
}

module.exports = {
  currencyFormatReg,
  currencyFormat,
}
