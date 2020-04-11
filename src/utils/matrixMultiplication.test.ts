import { matrixMultiply } from "./matrixMultiplication";

test("correctly multiplies 3x3 with 3x3", () => {
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
  const result = [
    [18, 0, 32],
    [29, 8, 37],
    [-49, 64, 57],
  ];
  expect(matrixMultiply(matrix1, matrix2)).toStrictEqual(result);
});

test("correctly multiplies by 0 matrix", () => {
  const matrix1 = [
    [4, -4, 6],
    [5, 0, 7],
    [-3, 8, 9],
  ];
  const matrix2 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  const result = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  expect(matrixMultiply(matrix1, matrix2)).toStrictEqual(result);
});

test("correctly multiplies with identity", () => {
  const matrix1 = [
    [4, -4, 6],
    [5, 0, 7],
    [-3, 8, 9],
  ];
  const matrix2 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];
  const result = [
    [4, -4, 6],
    [5, 0, 7],
    [-3, 8, 9],
  ];
  expect(matrixMultiply(matrix1, matrix2)).toStrictEqual(result);
});

test("correctly multiplies 4x2 with 2x3", () => {
  const matrix1 = [
    [0, 2],
    [5, 6],
    [3, 4],
    [7, 8],
  ];
  const matrix2 = [
    [9, -4, 10],
    [0, 1, -1],
  ];
  const result = [
    [0, 2, -2],
    [45, -14, 44],
    [27, -8, 26],
    [63, -20, 62],
  ];
  expect(matrixMultiply(matrix1, matrix2)).toStrictEqual(result);
});
