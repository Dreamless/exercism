export function multiplyMatrix(matrixA: number[][], matrixB: number[][]): number[][] {
  const rowsA = matrixA.length;
  const rowsB = matrixB.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;

  if (colsA !== rowsB) {
    throw new Error('Incompatible matrix size');
  }


  const result: number[][] = Array.from({ length: rowsA }, () => Array<number>(colsB).fill(0));

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return result;
}
