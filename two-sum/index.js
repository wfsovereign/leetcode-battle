/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  return (() => {
    var indexArr = []
    var length = nums.length
    for (var i = 0; i < length; i++) {
      var currentIndex = i
      for (var j = i + 1; j < length; j++) {
        if (nums[i] + nums[j] === target) {
          indexArr.push(i)
          indexArr.push(j)
          return indexArr
        }
      }
    }
  })()
}

var t = twoSum([2, 7, 11, 15], 9)
console.log('result : ', t)

const newTowSum = function (nums, target) {
  let i = 0, j = nums.length - 1
  let result
  let sortedArr = quiksort(nums, 0, nums.length - 1)
  console.log('sorted ,', sortedArr)

  while (i !== j) {
    if (sortedArr[i] + sortedArr[j] === target) {
      result = [i, j]
      i = j = -1
    } else if (sortedArr[i] + sortedArr[j] > target) {
      j--
    } else {
      i++
    }
  }
  return result
}

var t2 = newTowSum([2, 8, 9, 26, 7, 11, 6, 15], 18)
console.log('result 2: ', t2)

function quiksort (arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high)
    console.log('pi ', pi)
    quiksort(arr, low, pi - 1)
    quiksort(arr, pi + 1, high)
  }
  return arr
}

function partition (arr, low, high) {
  let pivot = arr[high]
  let i = low
  for (let j = low; j <= high; j++) {
    if (arr[j] < pivot) {
      let box = arr[j]
      arr[j] = arr[i]
      arr[i] = box
      i++
    }
  }
  let box = arr[high]
  arr[high] = arr[i]
  arr[i] = box
  return i
}


function nnTwoSum (nums, target) {
  let length = nums.length
  let box = {}
  for (let i = 0; i < length; i++) {
    let needKey = target - nums[i]
    if (box[needKey] !== undefined) {
      return [i, box[needKey]]
    }
    box[nums[i]] = i
  }
}


var tt1 = nnTwoSum([2, 7, 11, 15], 9)
console.log('result --nn : ', tt1)

var tt2 = nnTwoSum([2, 8, 9, 26, 7, 11, 6, 15], 18)
console.log('result -- nn: ', tt2)
