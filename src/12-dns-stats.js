/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
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
  domains.forEach((el) => {
    const dns = el.split('.').reverse();
    let sum = '';
    dns.forEach((e) => {
      sum = `${sum}.${e}`;
      obj[sum] = obj[sum] ? ++obj[sum] : 1;
    });
  });
  return obj;
}

module.exports = getDNSStats;
