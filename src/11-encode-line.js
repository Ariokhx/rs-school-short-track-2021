/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = str.split('');
  let encodedLine = '';
  let letter = res[0];
  let count = 0;
  for (let i = 0; i <= res.length; i++) {
    if (letter === res[i]) {
      count += 1;
    } else {
      if (count > 1) {
        encodedLine += `${count}${letter}`;
      } else {
        encodedLine += `${letter}`;
      }
      letter = res[i];
      count = 1;
    }
  }
  return encodedLine;
}

module.exports = encodeLine;
