/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

  nums = nums.sort((a, b) => (a - b))
  const length = nums.length
  let result = []
  for (let i = 0; i < length - 2; i++) {
    let next = i + 1
    let l = length - 1
    if (nums[i] <= 0) {
      while (next < l) {
        let sum = nums[i] + nums[next] + nums[l]
        if (sum > 0) {
          l--
        } else if (sum < 0) {
          next++
        } else {
          if (result.length === 0 ||
            result.length > 0 && (result[result.length - 1][0] !== nums[i] || result[result.length - 1][1] !== nums[next])
          ) {
            result.push([nums[i], nums[next], nums[l]])
          }
          next++
          l--

          while (next < l && nums[next] === nums[next - 1]) next++
          while (next < l && nums[l] === nums[l + 1]) l--
        }
      }
    }
  }

  return result.reduce((pre, cur, index) => {
    if (index === 0 || !(pre.some(item => {
      return item[0] === cur[0] && item[1] === cur[1] && item[2] === cur[2]
    }))) {
      pre.push(cur)
      return pre
    }
    return pre
  }, [])
}

/*
* Runtime: 536 ms, faster than 29.47% of JavaScript online submissions for 3Sum.
Memory Usage: 47 MB, less than 43.64% of JavaScript online submissions for 3Sum.
* */


module.exports = {
  threeSum,
}
