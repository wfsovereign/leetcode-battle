/*
* Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
*  Return the sum of the three integers. You may assume that each input would have exactly one solution.
Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
* */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const length = nums.length
  if (length < 3) return 0

  nums = nums.sort((a, b) => a - b)
  let result = nums[0] + nums[1] + nums[2]
  if (length === 3) return result
  let i = 0
  while(i < length - 2) {
    let next = i + 1
    let l = length - 1
    while (next < l) {
      const sum = nums[i] + nums[next] + nums[l]
      if (sum === target) return sum
      else if (sum < target) {
        next++
      } else {
        l--
      }
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum
      }
    }
    i++
  }
  return result
}

module.exports = {
  threeSumClosest,
}
