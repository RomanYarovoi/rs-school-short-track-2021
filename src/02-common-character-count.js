/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For , the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const chars = new Set(s1);
  [...chars].forEach((item) => {
    result += Math.min(s1.split(item).length - 1, s2.split(item).length - 1);
  });
  return result;
}

module.exports = getCommonCharacterCount;
