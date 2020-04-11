import React from "react";
import MathJax from "react-mathjax-preview";
import { matrixMultiply } from "./utils/matrixMultiplication";
import { matrixToString } from "./utils/matrixToString";

export const Matrix = () => {
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
