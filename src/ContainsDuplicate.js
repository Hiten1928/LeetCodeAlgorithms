// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true



/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums.length === 0){
        return false;
    }
    var map = {};
    var flag = false;
    for(num of nums){
        if(!map[num]){
            map[num] = 1;
        } else {
            map[num] +=1;
        }
    }
    for(key in map){
        if(map[key] > 1){
            flag = true;
            break;
        } else {
            flag = false;
        }
    }
    return flag
};

