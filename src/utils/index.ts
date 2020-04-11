import { Matrix, Column } from "../types/utils";

export const canMultiply = (left: Matrix, right: Matrix): boolean => {
  const bothAreMatrices = isMatrix(left) && isMatrix(right);
  if (bothAreMatrices) {
    const colsOfLeftMatrix = left[0].length;
    const rowsOfRightMatrix = right.length;
    return colsOfLeftMatrix === rowsOfRightMatrix;
  }
  return false;
};

export const isMatrix = (matrix: Matrix): boolean => {
  const hasSameSizeRows = matrix
    .map((row) => {
      return row.length === matrix[0].length;
    })
    .reduce((bool, agg) => bool && agg);
  return hasSameSizeRows;
};

export const getColumn = (matrix: Matrix, column: number): Column => {
  return matrix.map((row) => row[column]);
};
