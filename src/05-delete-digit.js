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
  const num = n.toString();
  const sol = [];
  for (let i = 0; i < num.length; i++) {
    const m = [...num];
    m.splice(i, 1);
    sol.push(parseInt(m.join(''), 10));
  }
  return Math.max(...sol);
}
module.exports = deleteDigit;
