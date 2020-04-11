import React from "react";
import MathJax from "react-mathjax-preview";

const matrix1 = [
  [4, -4, 6],
  [5, 0, 7],
  [-3, 8, 9],
];
const matrix2 = [
  [10, -4, -1],
  [1, 2, 0],
  [-3, 4, 6],
];
// const result = [
//   [18, 0, 32],
//   [29, 8, 37],
//   [-49, 64, 57],
// ];

type Matrix = number[][];
type Column = number[];

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

const getColumn = (matrix: Matrix, column: number): Column => {
  return matrix.map((row) => row[column]);
};

export const matrixMultiply = (left: Matrix, right: Matrix): Matrix => {
  if (!canMultiply(left, right)) {
    new Error("These matrics can not be multiplied!");
  }
  let out: Matrix = new Array(left.length).fill(
    new Array(right[0].length).fill(0)
  );
  for (let j = 0; j < left[0].length; j++) {
    const column = getColumn(left, j);
    const matrix = column.map((digit) => {
      return right[j].map((digit2) => digit * digit2);
    });
    out = out.map((row, i) => row.map((digit, j) => digit + matrix[i][j]));
  }
  return out;
};

export const matrixToString = (matrix: Matrix): String => {
  const matrixString = matrix
    .map(
      (row) =>
        row
          .map((col, j) => {
            return `${col} ${j === row.length - 1 ? "" : "&"}`;
          })
          .join("") + " \\\\"
    )
    .join("");
  return String.raw`
        \begin{pmatrix}
        ${matrixString} 
        \end{pmatrix} `;
};

export const Matrix = () => {
  const matrix3 = matrixMultiply(matrix1, matrix2);
  const math = String.raw`
    \begin{equation}
        ${matrixToString(matrix1)}
        *
        ${matrixToString(matrix2)}
        =
        ${matrixToString(matrix3)} 
    \end{equation}
    `;
  return <MathJax math={math} />;
};
