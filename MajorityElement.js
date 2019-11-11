// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var obj = {}
  for (num of nums) {
    if (!obj[num]) {
      obj[num] = 1
    } else {
      obj[num] += 1
    }
  }
  for (key in obj) {
    if (obj[key] >= Math.round(nums.length / 2)) {
      return parseInt(key)
    }
  }
}
