import { Matrix } from "../types/utils";

export const matrixToString = (matrix: Matrix): String => {
  const matrixString = String.raw`\begin{pmatrix} ${matrix
    .map(
      (row) =>
        row
          .map((col, j) => {
            return `${col} ${j === row.length - 1 ? "" : "&"} `;
          })
          .join("") + "\\\\ "
    )
    .join("")} \end{pmatrix}`;
  return trim(matrixString);
};

export const trim = (str: String): String => str.replace(/\s+/g, "");
