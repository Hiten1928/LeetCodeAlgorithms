/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  var flag = new Boolean(false)

  s = s
    .split('')
    .sort()
    .join('')
  t = t
    .split('')
    .sort()
    .join('')

  for (let char of t) {
    for (let char1 of s) {
      if (char == char1) {
        flag = true
      }
    }
  }

  return flag
}
