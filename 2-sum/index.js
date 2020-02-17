/**
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 You may assume that each input would have exactly one solution, and you may not use the same element twice.

 Example:

 Given nums = [2, 7, 11, 15], target = 9,

 Because nums[0] + nums[1] = 2 + 7 = 9,
 return [0, 1].
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  if (!nums || nums.length === 0) {
    return []
  }
  const length = nums.length


  if (length === 1) {
    return []
  }

  if (length === 2 && (nums[0] + nums[1]) === target) {
    return [0, 1]
  }

  const result = nums.reduce((pre, cur, index) => {
    if (index <= (length - 1)) {
      for (let i = (index + 1); i < length; i++) {
        if (cur + nums[i] === target) {
          pre = [index, i]
          return pre;
        }
      }
    }
    return pre
  }, [])

  return result
};


// var twoSum2 = function(nums, target) {
//   const length = nums.length
//   const box = {}
//   for (let i = 0; i < length; i++) {
//     const needKey = target - nums[i]
//     if (box[needKey] !== undefined) {
//       return [i, box[needKey]]
//     }
//     box[nums[i]] = i
//   }
// };

var twoSum2 = function(nums, target) {
  const length = nums.length
  const obj = {}
  for (let i = 0; i < length; i++) {
    const key = target - nums[i]
    if (obj[key] !== undefined) {
      return [obj[key], i]
    }
    obj[nums[i]] = i
  }
};

// use object replace array, utilize object key query faster than array iteration

/*
* Runtime: 56 ms, faster than 85.82% of JavaScript online submissions for Two Sum.
Memory Usage: 34.5 MB, less than 88.02% of JavaScript online submissions for Two Sum.
* */

module.exports = {
  twoSum,
  twoSum2
}
