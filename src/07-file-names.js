/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newArr = [];
  names.forEach((item, index) => {
    if (newArr.includes(item)) {
      let cnt = 0;
      for (let i = 0; i < index; i++) {
        if (item === names[i] || item === newArr[i]) {
          cnt += 1;
        }
      }
      newArr.push(`${item}(${cnt})`);
    } else {
      newArr.push(item);
    }
  });
  return newArr;
}

module.exports = renameFiles;
