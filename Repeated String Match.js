Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

For example, with A = "abcd" and B = "cdabcdab".

Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").




/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    let count = Math.ceil(B.length/A.length);
    let C = A.repeat(Math.ceil(B.length/A.length));
    if(C.indexOf(B) > -1) return count;
    if((C+A).indexOf(B) > -1) return count+1;
    return -1;
};