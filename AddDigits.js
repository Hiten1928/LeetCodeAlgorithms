Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:

Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             Since 2 has only one digit, return it.




/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return 1+ (num-1)%9;   
    // var sum = 0;
    // num = "" + num;
    // while(!num.length !== 1){
    //     for(var i =0; i<num.length; i++){
    //         sum += parseInt(num[i]);
    //     }
    //     num = "" + sum;
    // }
    //  return parseInt(num);
};