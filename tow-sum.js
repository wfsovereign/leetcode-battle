/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  return (() => {
    var indexArr = [];
    var length = nums.length;
    for (var i = 0; i < length; i++) {
      var currentIndex = i;
      for (var j = i + 1; j < length; j++) {
        if (nums[i] + nums[j] === target) {
          indexArr.push(i);
          indexArr.push(j);
          return indexArr;
        }
      }
    }
  })();
};

var t = twoSum([2, 7, 11, 15], 9);
console.log('result : ', t);
