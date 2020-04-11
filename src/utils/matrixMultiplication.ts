import { canMultiply, getColumn } from ".";
import { Matrix } from "../types/utils";

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
