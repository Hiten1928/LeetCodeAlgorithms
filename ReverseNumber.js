/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var flag = Math.sign(x)
  var reverse = parseInt(
    x
      .toString()
      .split('')
      .reverse()
      .join('')
  )
  reverse = reverse * flag

  if (Math.abs(reverse) > Math.pow(2, 31)) {
    return 0
  }

  return reverse
}
