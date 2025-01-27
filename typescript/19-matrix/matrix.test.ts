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
})
