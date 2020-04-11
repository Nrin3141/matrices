import { matrixToString, trim } from "./matrixToString";

test("converts 1x1 matrix to latex matrix string", () => {
  const matrix = [[3]];
  const matrixString = trim(String.raw`
  \begin{pmatrix} 
    ${matrix[0][0]} \\ 
  \end{pmatrix}`);
  expect(matrixToString(matrix)).toBe(matrixString);
});

test("converts 1x5matrix to latex matrix string", () => {
  const matrix = [[3, 2, 2, 2, 2]];
  const matrixString = trim(String.raw`
  \begin{pmatrix} 
    ${matrix[0][0]} & ${matrix[0][1]} & ${matrix[0][2]} & ${matrix[0][3]} & ${matrix[0][4]}\\ 
  \end{pmatrix}`);
  expect(matrixToString(matrix)).toBe(matrixString);
});

test("converts 5x1 matrix to latex matrix string", () => {
  const matrix = [[3], [2], [2], [2], [2]];
  const matrixString = trim(String.raw`
  \begin{pmatrix} 
    ${matrix[0][0]} \\ 
    ${matrix[1][0]} \\  
    ${matrix[2][0]} \\ 
    ${matrix[3][0]} \\  
    ${matrix[4][0]} \\  
    \end{pmatrix}`);
  expect(matrixToString(matrix)).toBe(matrixString);
});

test("converts 3x2 matrix to latex matrix string", () => {
  const matrix = [
    [3, 1, 2],
    [2, 2, 2],
  ];
  const matrixString = trim(String.raw`
  \begin{pmatrix} 
    ${matrix[0][0]} & ${matrix[0][1]} & ${matrix[0][2]} \\ 
    ${matrix[1][0]} & ${matrix[1][1]} & ${matrix[1][2]}  \\  
    \end{pmatrix}`);
  expect(matrixToString(matrix)).toBe(matrixString);
});

test("converts 3x3 matrix to latex matrix string", () => {
  const matrix = [
    [3, 1, 2],
    [2, 2, 2],
    [2, 2, 2],
  ];
  const matrixString = trim(String.raw`
  \begin{pmatrix} 
    ${matrix[0][0]} & ${matrix[0][1]} & ${matrix[0][2]} \\
    ${matrix[1][0]} & ${matrix[1][1]} & ${matrix[1][2]}  \\
    ${matrix[2][0]} & ${matrix[2][1]} & ${matrix[2][2]}  \\
    \end{pmatrix}`);
  expect(matrixToString(matrix)).toBe(matrixString);
});
