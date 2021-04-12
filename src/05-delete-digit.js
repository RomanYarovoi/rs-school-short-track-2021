/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  if (arr.length === 2) {
    return Math.max(...arr);
  }
  for (let i = 0; arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      arr.splice(i, 1);
      break;
    }
  }
  return Number(arr.join(''));
}

module.exports = deleteDigit;
