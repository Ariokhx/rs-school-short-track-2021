/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    const str = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      for (let a = i - 1; a <= i + 1; a++) {
        if (a >= 0 && a <= matrix.length - 1) {
          for (let b = j - 1; b <= j + 1; b++) {
            if (b >= 0 && b <= matrix[i].length - 1) {
              if (a !== i || b !== j) {
                count += matrix[a][b] ? 1 : 0;
              }
            }
          }
        }
      }
      str.push(count);
    }
    newMatrix.push(str);
  }
  return newMatrix;
}

module.exports = minesweeper;
