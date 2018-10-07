Given an integer array, find three numbers whose product is maximum and output the maximum product.

Example 1:
Input: [1,2,3]
Output: 6
Example 2:
Input: [1,2,3,4]
Output: 24




/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    var length = nums.length;
    nums = nums.sort(function(a,b) {return a-b;}); 
    return Math.max((nums[length-1]*nums[0]*nums[1]), (nums[length-1]*nums[length-2]*nums[length-3]));
};