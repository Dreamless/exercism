import { describe, it, expect } from '@jest/globals'
import { multiplyMatrix } from './matrix.ts'

describe('Matrix multiply', () => {
  it('simple matrix multiply', () => {
    const matrixA = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const matrixB = [
      [7, 8],
      [9, 10],
      [11, 12],
    ]

    const expected = [
      [58, 64],
      [139, 154],
    ]

    expect(multiplyMatrix(matrixA, matrixB)).toEqual(expected)
  })

  it('square matrix', () => {
    const matrixA = [
      [1, 2],
      [3, 4],
    ]
    const matrixB = [
      [5, 6],
      [7, 8],
    ]

    const expected = [
      [19, 22],
      [43, 50],
    ]

    expect(multiplyMatrix(matrixA, matrixB)).toEqual(expected)
  })

  it('multiply matrix 1x1', () => {
    const matrixA = [[2]]
    const matrixB = [[3]]

    const expected = [[6]]

    expect(multiplyMatrix(matrixA, matrixB)).toEqual(expected)
  })

  it('incompatible matrix size', () => {
    const matrixA = [
      [1, 2],
      [3, 4],
    ]

    const matrixB = [[1, 2, 3]]

    expect(() => multiplyMatrix(matrixA, matrixB)).toThrow(
      'Incompatible matrix size'
    )
  })

})
