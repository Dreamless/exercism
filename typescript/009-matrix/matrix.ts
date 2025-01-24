export class Matrix {
  readonly matrix: number[][];

  constructor(input: string) {
    this.matrix = input.split(/\n/).map(row =>
      row.split(/\s+/).map(n => Number(n))
    );
  }

  get rows(): number[][] {
    return this.matrix;
  }

  get columns(): number[][] {
    const rowLength = this.matrix.length;
    const colLength = this.matrix[0].length;

    const rotated: number[][] = Array.from({ length: colLength }, () => Array<number>(rowLength).fill(0));

    for (let i = 0; i < rowLength; i++) {
      for (let j = 0; j < colLength; j++) {
        rotated[j][i] = this.matrix[i][j];
      }
    }

    return rotated;
  }
}
