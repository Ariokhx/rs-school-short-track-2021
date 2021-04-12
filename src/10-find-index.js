/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, value) {
  let result;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    if (arr[start] === value) {
      result = start;
      break;
    } else if (arr[end] === value) {
      result = end;
      break;
    } else {
      start++;
      end--;
    }
  }
  return result;
}

module.exports = findIndex;
