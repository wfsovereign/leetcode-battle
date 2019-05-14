/*
* Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

* */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const length = nums.length
  if (length < 4) return []

  nums = nums.sort((a, b) => a - b)

  let star = 0, end = nums.length - 1


  const result = []
  while (star <= end - 2) {
    if ((star > 0) && nums[star] === nums[star - 1]) {
      star++
      continue
    }

    for (let i = star + 1; i < end - 1; i++) {
      let s = i + 1, e = end
      if ((i > (star + 1)) && nums[i] === nums[i - 1]) continue

      while (s < e) {
        const sum = nums[star] + nums[s] + nums[e] + nums[i]
        if (sum === target) {
          result.push([nums[star], nums[i], nums[s], nums[e]])
        }
        if (sum > target) {
          e--
          while (s < e && nums[e] === nums[e + 1]) e--
        } else {
          s++
          while (s < e && nums[s] === nums[s - 1]) s++
        }
      }
    }
    star++
  }

  return result
}


module.exports = {
  fourSum,
}
