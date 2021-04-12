/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example

 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  domains.forEach((item) => {
    let str = '';
    item.split('.').reverse().forEach((el) => {
      str += `.${el}`;
      obj[str] = (obj[str] || 0) + 1;
    });
  });
  return obj;
}
// let domains = [
//     'code.yandex.ru',
//     'music.yandex.ru',
//     'yandex.ru'
//    ]

// console.log(getDNSStats(domains));

module.exports = getDNSStats;
