Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1





/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var first =0;
    for(var i=0;i<nums.length;i++){
        first ^= nums[i];
    }
    return first;
};