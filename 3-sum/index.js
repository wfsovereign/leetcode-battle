/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const length = nums.length
  if (length < 3) {
    return []
  }
  nums = nums.sort((a, b) => (a - b))
  let result = []
  for (let i = 0; i < length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let next = i + 1
    let l = length - 1

    if (nums[i] > 0) {
      break
    }
    while (next < l) {
      let sum = nums[i] + nums[next] + nums[l]
      if (sum > 0) {
        l--
      } else if (sum < 0) {
        next++
      } else {
        result.push([nums[i], nums[next], nums[l]])
        next++
        l--
        while (next < l && nums[next] === nums[next - 1]) next++
        while (next < l && nums[l] === nums[l + 1]) l--
      }
    }
  }
  return result
}

/*
* Runtime: 536 ms, faster than 29.47% of JavaScript online submissions for 3Sum.
Memory Usage: 47 MB, less than 43.64% of JavaScript online submissions for 3Sum.

The second method:

Runtime: 168 ms, faster than 90.77% of JavaScript online submissions for 3Sum.
Memory Usage: 46.8 MB, less than 56.37% of JavaScript online submissions for 3Sum.

The third method:

Runtime: 164 ms, faster than 99.29% of JavaScript online submissions for 3Sum.
Memory Usage: 47 MB, less than 42.28% of JavaScript online submissions for 3Sum.

* */

module.exports = {
  threeSum,
}
