const Direction = require('./Direction').Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor(matrix) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate(direction) {
    const width = this.matrix[0].length;
    const height = this.matrix.length;
    const transpose = [];

    for (let y = 0; y < height; y++) {
      transpose[y] = [];
      for (let x = 0; x < width; x++) {
        transpose[y][x] = this.matrix[x][y];
      }
    }

    if (direction == 'ClockWise') {
      transpose.forEach(row => row.reverse());
      this.matrix = transpose;
    } else {
      const newHeight = width;
      const newWidth = height;

      const columnsReversed = [];

      for (let y = 0; y < newHeight; y++) {
        columnsReversed[y] = [];

        for (let x = 0; x < newWidth; x++) {
          columnsReversed[y][x] = transpose[newHeight - y - 1][x];
        }
      }

      this.matrix = columnsReversed;
    }
  }
};
